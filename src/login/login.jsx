import React from 'react';

export function Login() {
  return (
    <main className="container py-4">
        <div className="text-center mb-4">
            <h1>Doable</h1>
            <p className="lead">Turn everything you have going on into a realistic plan</p>
            <img className="img-fluid rounded shadow-sm" src="/login-image.png"
            alt="Illustration of a person balancing many tasks at once — checklist, calendar, and laptop — while riding a clock" width="400" />
        </div>
        <div className="row g-4">
            <div className="col-md-6">
                <form className="card p-4 h-100">
                    <h2>Login</h2>
                    <label className="form-label" htmlFor="login-username">Username</label>
                    <input className="form-control mb-3" type="text" id="login-username" name="username" required />
                    <label className="form-label" htmlFor="login-password">Password</label>
                    <input className="form-control mb-3" type="password" id="login-password" name="password" required />
                    <button className="btn btn-primary" type="submit">Sign In</button>
                </form>
            </div>
            <div className="col-md-6">
                <form className="card p-4 h-100">
                    <h2>Create Account</h2>
                    <label className="form-label" htmlFor="create-username">Username</label>
                    <input className="form-control mb-3" type="text" id="create-username" name="username" required />
                    <label className="form-label" htmlFor="create-password">Password</label>
                    <input className="form-control mb-3" type="password" id="create-password" name="password" required />
                    <button className="btn btn-success" type="submit">Sign Up</button>
                </form>
            </div>
        </div>
        <p className="mt-4 text-center">Welcome, <span id="username-display">[username]</span></p>
    </main>

  );
}