import { v4 as uuid } from "uuid";

import {
  ScanRequest
}
from "../interfaces/scan-request.interface";

import {
  ScanResponse
}
from "../interfaces/scan-response.interface";

import {
  ScanSession
}
from "../interfaces/scan-session.interface";

import {
  sessionStore
}
from "../storage/session.store";

import {
  OrchestrationService
}
from "./orchestration.service";

export class ScanService {

  private orchestrationService =
    new OrchestrationService();

  async startScan(
    request: ScanRequest
  ): Promise<ScanResponse> {

    const session: ScanSession = {

      scanId:
        uuid(),

      target:
        request.target,

      status:
        "PENDING",

      createdAt:
        new Date()
          .toISOString()
    };

    sessionStore.push(
      session
    );

    this.orchestrationService
        .execute(
            session.scanId
        );

    return {

      scanId:
        session.scanId,

      status:
        session.status,

      target:
        session.target,

      createdAt:
        session.createdAt
    };
  }
}