"use client";
import React, { useState } from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import SingleStepper from "./SingleStepper";

const steps = [
  {
    icon: <LocalMallIcon />,
    label: "CART",
    description: "Review all your product and edit the number.",
  },
  {
    icon: <AccountCircleOutlinedIcon />,
    label: "CUSTOMER INFORMATION",
    description: "Add your name, phone number and address.",
  },
  {
    icon: <PaymentOutlinedIcon />,
    label: "SHIPPING & PAYMENT",
    description: "With many payment methods, including yours.",
  },
  {
    icon: <VisibilityOutlinedIcon />,
    label: "REVIEW",
    description: "View all your information before the confirmation.",
  },
];
export default function HorizontalLinearAlternativeLabelStepper() {
  const [activeStep, setActiveStep] = useState(2);
  return (
    <div className="stepper-wrapper mx-auto">
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>
              <SingleStepper
                icon={label?.icon}
                title={label.label}
                subTitle={label.description}
                isActive={index <= activeStep}
              />
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}
