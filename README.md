# 🇲🇦 Moroccan Salary Calculator (Brut → Net)

A web application to calculate the **net salary** from the **gross salary** in Morocco, considering CNSS, AMO, IR, indemnities (taxable and exempt), family situation, and other deductions.

---

## 🚀 Overview

This project provides two salary simulation modes:

-   **Simplified Simulator** — fast estimation using total indemnities.
-   **Detailed Simulator** — full breakdown with itemized income, indemnities, benefits, and deductions.

It helps employees and employers estimate accurately **what remains in hand (net)** after all deductions and social contributions.

---

## ✨ Features

### 1. Simplified Simulator

The user provides:

-   Salaire de base
-   Situation familiale (célibataire / marié)
-   Nombre d’enfants à charge (< 27 ans)
-   Ancienneté
-   Total indemnités exonérées
-   Total indemnités imposables
-   Total avantages en nature
-   Retraite complémentaire (CIMR, RCAR, …)
-   Intérêts crédit logement

→ The calculator outputs:

-   Salaire imposable
-   Cotisations CNSS + AMO
-   Revenu net imposable (RNI)
-   Impôt mensuel (IR)
-   Salaire net à payer

---

### 2. Detailed Simulator

Allows full itemization:

-   **Base salary & seniority**
-   **Indemnities list** (each with name, amount, taxable/exempt)
-   **Benefits in nature**
-   **Deductions** (complementary retirement, loan interest…)
-   **Family status & dependents**

Outputs a detailed breakdown of all components and computes net salary accordingly.

---

## 📐 Calculation Rules (Morocco)

The calculator applies:

-   CNSS contributions (employee share)
-   AMO contributions
-   Official Moroccan IR (impôt sur le revenu) progressive tax brackets
-   Treatment of indemnities (taxable vs exempt)
-   Family-related deductions (spouse, children)
-   Seniority bonus if applicable
-   Additional deductions (retirement fund, loan interest, etc.)

---

## 🛠️ Getting Started

```bash
git clone https://github.com/<your-username>/moroccan-salary-calculator.git
cd moroccan-salary-calculator
npm install
npm run dev
```
