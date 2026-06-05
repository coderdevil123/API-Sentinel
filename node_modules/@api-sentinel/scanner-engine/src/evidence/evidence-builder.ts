export class EvidenceBuilder {

  static build(
    request: string,
    response: string
  ): string {

    return `
REQUEST:
${request}

RESPONSE:
${response}
`;
  }
}