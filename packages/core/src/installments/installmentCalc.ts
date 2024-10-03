import { MAX_INSTALLMENTS_QTY, MENSAL_FEE } from "../constants";
import IInstallments from "./installments";

export default class InstallmentCalc {
    execute(
        totalValue: number,
        installmentsQty: number = MAX_INSTALLMENTS_QTY,
        percentFee: number = MENSAL_FEE
    ): IInstallments {
        if (installmentsQty < 2 || installmentsQty > MAX_INSTALLMENTS_QTY) {
            throw new Error(`Quantity of installments must be between 2 and ${MAX_INSTALLMENTS_QTY}`);
        }

        const installmentValue = this.installmentCalcWithFee(
            totalValue,
            percentFee,
            installmentsQty
        );

        return {
            totalValue: this.twoDecimalValues(totalValue),
            installmentValue: this.twoDecimalValues(installmentValue / installmentsQty),
            installmentsQty,
            percentFee,
        }
    }

    private installmentCalcWithFee(
        totalValue: number,
        percentFee: number,
        installmentsQty: number) {
        
        return totalValue * Math.pow(1 + percentFee, installmentsQty)
    }
    
    private twoDecimalValues(value: number): number {
        return Math.round(value * 100) / 100
    }
}