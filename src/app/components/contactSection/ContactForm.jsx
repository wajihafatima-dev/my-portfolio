"use client";
import { Box, Grid, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import DynamicButton from "../DynamicButton";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus(data.message || "Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Error sending message.");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={(theme) => ({
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.secondary,
        borderRadius: "20px",
        textAlign: "center",
        display: "flex",
         padding: { xs: 2, sm: 3, md: 4 },
        flexDirection: "column",
        justifyContent: "center",
        boxShadow: theme.palette.card.shadow,
        position: "relative",
        overflow: "hidden",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          boxShadow: `0 0 18px 8px ${
            theme.palette.mode === "dark"
              ? "rgba(0, 255, 255, 0.6)"
              : "rgba(25, 118, 210, 0.3)"
          }`,
        },
      })}
    >
    <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",gap:2}}>

      <TextField
        label="Your Name"
        name="name"
        variant="outlined"
        fullWidth
        required
        value={form.name}
        onChange={handleChange}
      />
      <TextField
        label="Your Email"
        name="email"
        type="email"
        variant="outlined"
        fullWidth
        required
        value={form.email}
        onChange={handleChange}
      />
      <TextField
        label="Your Message"
        name="message"
        variant="outlined"
        fullWidth
        multiline
        rows={3}
        required
        value={form.message}
        onChange={handleChange}
      />
      <DynamicButton
        label="Submit"
        type="submit"
        variant="contained"
        sx={{
          color: "#fff",
          border: "2px solid transparent",
          paddingX: { xs: 2.5, sm: 4, md: 6 },
          fontSize: { xs: 13, sm: 13, md: 14 },
          width: { xs: "60%", sm: "80%" },
          borderRadius: "999px",
          backgroundImage: "linear-gradient(90deg, #A16BBE, #E066FF)",
          backgroundSize: "200% auto",
          boxShadow: "0 4px 12px rgba(161, 107, 190, 0.5)",
          transition: "all 0.4s ease-in-out",
          fontWeight: 600,
          alignItem:"center",
          letterSpacing: "0.5px",
          "&:hover": {
            backgroundPosition: "right center",
            transform: "translateY(-2px) scale(1.04)",
            boxShadow: "0 6px 18px rgba(224, 102, 255, 0.6)",
            color: "#120061",
            borderColor: "#fff",
          },
        }}
      />
    </Box>

      {/* <Box sx={{  mt: 2 }}>
        <p style={{ margin: 0, color: "green", fontWeight: 500 }}>{status}</p>
        </Box> */}
    </Box>
  );
};

export default ContactForm;
