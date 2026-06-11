"use client";

export default function DownloadReportButton({
  scanId
}: {
  scanId: string;
}) {

  function download() {

    window.open(
      `http://localhost:7000/api/reports/${scanId}/download`,
      "_blank"
    );
  }

  return (

    <button
      onClick={download}
      className="
      px-3
      py-2
      bg-blue-600
      rounded-lg
      text-sm
      hover:bg-blue-500
      "
    >
      Download
    </button>

  );
}