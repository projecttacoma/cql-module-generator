export interface  code {
    system: "SNOMED-CT" | "RxNorm" | "LOINC" | "NUBC" | "DICOM-DCM" | "DICOM-SOP",
    code: string,
    display: string,
    value_set: string
  }