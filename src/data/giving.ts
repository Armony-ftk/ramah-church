export type GivingDetail = {
  label: string;
  value: string;
  displayValue?: string;
};

export type GivingMethod = {
  id: string;
  number: string;
  title: string;
  description: string;
  details: readonly GivingDetail[];
  copyButtonLabel: string;
  copyFormat: "labeled" | "value";
};

export const givingMethods = [
  {
    id: "bank-transfer",
    number: "01",
    title: "Bank Transfer",
    description: "Give directly through your bank.",
    details: [
      { label: "Branch", value: "FNB NORTHGATE" },
      { label: "Account Number", value: "62796058884" },
      { label: "Branch Code", value: "256755" },
    ],
    copyButtonLabel: "Copy bank details",
    copyFormat: "labeled",
  },
  {
    id: "e-wallet",
    number: "02",
    title: "E-Wallet",
    description: "Give quickly using your mobile wallet.",
    details: [
      {
        label: "Phone Number",
        value: "+27728418148",
        displayValue: "+27 72 841 8148",
      },
    ],
    copyButtonLabel: "Copy phone number",
    copyFormat: "value",
  },
] satisfies readonly GivingMethod[];

export function getGivingMethodCopyText(method: GivingMethod) {
  if (method.copyFormat === "labeled") {
    return method.details
      .map((detail) => `${detail.label}: ${detail.value}`)
      .join("\n");
  }

  return method.details.map((detail) => detail.value).join("\n");
}
