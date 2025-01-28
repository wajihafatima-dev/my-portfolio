"use client"
import React, { useState, useTransition } from 'react'
import { TAB_DATA } from "../../constants/PAGE_CONSTANT";
import { Box } from '@mui/material';
import Button from '../DynamicButton';
import DynamicButton from '../DynamicButton';

const AboutCards = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();
    const handleTabChange = (id) => {
        startTransition(() => {
          setTab(id);
        });
      };
  return (
    <Box>
    <Box sx={{ display: "flex", gap: 2, marginTop: 4 }}>
            <DynamicButton
             label={"Skills"}
              variant={tab === "skills" ? "contained" : "outlined"}
              onClick={() => handleTabChange("skills")}
            />
            <DynamicButton
             label={"Education"}
              variant={tab === "education" ? "contained" : "outlined"}
              onClick={() => handleTabChange("education")}
            />
            <DynamicButton
            label={"Certifications"}
              variant={tab === "certifications" ? "contained" : "outlined"}
              onClick={() => handleTabChange("certifications")}
            />
          </Box>
          <Box sx={{ marginTop: 4 }}>
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </Box>
        </Box>
  )
}

export default AboutCards
