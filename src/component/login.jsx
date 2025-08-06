import React, { useState } from "react";

const Login = () => {
    const [form, setForm] = useState({ email: "", password: "" });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setError("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Dummy validation
        if (!form.email || !form.password) {
            setError("Please enter both email and password.");
            return;
        }
        // Handle login logic here
        alert("Logged in!");
    };

    return (
        <div style={{
            maxWidth: 400,
            margin: "40px auto",
            padding: 32,
            border: "1px solid #e1e1e1",
            borderRadius: 6,
            background: "#fff",
            boxShadow: "0 2px 8px rgba(0,0,0,0.07)"
        }}>
            <h2 style={{ marginBottom: 24, color: "#f48024" }}>Log in</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: 16 }}>
                    <label htmlFor="email" style={{ display: "block", marginBottom: 6, fontWeight: 500 }}>
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        style={{
                            width: "100%",
                            padding: "8px",
                            border: "1px solid #ccc",
                            borderRadius: 4
                        }}
                        autoComplete="email"
                        required
                    />
                </div>
                <div style={{ marginBottom: 16 }}>
                    <label htmlFor="password" style={{ display: "block", marginBottom: 6, fontWeight: 500 }}>
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        style={{
                            width: "100%",
                            padding: "8px",
                            border: "1px solid #ccc",
                            borderRadius: 4
                        }}
                        autoComplete="current-password"
                        required
                    />
                </div>
                {error && (
                    <div style={{ color: "#d0393e", marginBottom: 12 }}>{error}</div>
                )}
                <button
                    type="submit"
                    style={{
                        width: "100%",
                        background: "#f48024",
                        color: "#fff",
                        padding: "10px",
                        border: "none",
                        borderRadius: 4,
                        fontWeight: 600,
                        cursor: "pointer"
                    }}
                >
                    Log in
                </button>
            </form>
            <div style={{ marginTop: 18, fontSize: 14 }}>
                <span>Don’t have an account? </span>
                <a href="/signup" style={{ color: "#0077cc" }}>Sign up</a>
            </div>
        </div>
    );
};

