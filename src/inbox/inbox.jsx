import React from 'react';

export function Inbox() {
  return (
    <main className="container py-4">
        <h1 className="text-center mb-4">Inbox</h1>
        <div className="text-center mb-4">
            <img className="img-fluid rounded shadow-sm" src="/inbox-image.png" alt="Inbox icon showing an arrow pointing into a tray" width="400" />
        </div>

        <section className="mb-4">
            <h2>Unsorted Items</h2>
            <ul className="list-group">
                <li className="list-group-item d-flex flex-wrap justify-content-between align-items-center gap-2">
                    <span>Study for Marketing midterm</span>
                    <div className="d-flex gap-2">
                        <button className="btn btn-outline-primary btn-sm" type="button">Add to Week</button>
                        <button className="btn btn-outline-success btn-sm" type="button">Add to Day</button>
                    </div>
                </li>
            </ul>
        </section>

        <form className="card p-4">
            <h2>Add New Item</h2>
            <label className="form-label" htmlFor="new-inbox-item">Item</label>
            <div className="input-group">
                <input className="form-control" type="text" id="new-inbox-item" name="item" required />
                <button className="btn btn-primary" type="submit">Add</button>
            </div>
        </form>
    </main>
  );
}