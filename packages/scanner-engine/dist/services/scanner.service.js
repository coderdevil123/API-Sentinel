"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScannerService = void 0;
const bola_detector_1 = require("../detectors/bola/bola.detector");
const sqli_detector_1 = require("../detectors/sqli/sqli.detector");
const finding_manager_1 = require("../findings/finding-manager");
const report_builder_service_1 = require("./report-builder.service");
const rate_limit_detector_1 = require("../detectors/rate-limit/rate-limit.detector");
const auth_detector_1 = require("../detectors/auth/auth.detector");
const data_exposure_detector_1 = require("../detectors/data-exposure/data-exposure.detector");
const mass_assignment_detector_1 = require("../detectors/mass-assignment/mass-assignment.detector");
class ScannerService {
    bolaDetector = new bola_detector_1.BolaDetector();
    sqliDetector = new sqli_detector_1.SqliDetector();
    authDetector = new auth_detector_1.AuthDetector();
    dataExposureDetector = new data_exposure_detector_1.DataExposureDetector();
    massAssignmentDetector = new mass_assignment_detector_1.MassAssignmentDetector();
    findingManager = new finding_manager_1.FindingManager();
    reportBuilder = new report_builder_service_1.ReportBuilder();
    rateLimitDetector = new rate_limit_detector_1.RateLimitDetector();
    async scanTarget(targetUrl) {
        const findings = [];
        const authResult = await this.authDetector.scan(targetUrl);
        const dataExposureResult = await this.dataExposureDetector.scan(targetUrl);
        const massAssignmentResult = await this.massAssignmentDetector.scan(targetUrl);
        this.findingManager.add(authResult);
        this.findingManager.add(dataExposureResult);
        this.findingManager.add(massAssignmentResult);
        const bolaResult = await this.bolaDetector.scan(targetUrl);
        this.findingManager.add(bolaResult);
        const sqliResult = await this.sqliDetector.scan(targetUrl);
        this.findingManager.add(sqliResult);
        const rateLimitResult = await this.rateLimitDetector.scan(targetUrl);
        this.findingManager.add(rateLimitResult);
        return this.reportBuilder.build(this.findingManager.getAll());
    }
}
exports.ScannerService = ScannerService;
