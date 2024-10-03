import { InstallmentCalc } from "@gstore/core";

export default function useInstallments(
  value: number,
  installmentsQty: number = 12
) {
  const installment = new InstallmentCalc().execute(value, installmentsQty);
  return installment;
}
