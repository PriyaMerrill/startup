import React from 'react';

export function Groups() {
  return (
    <main className="container py-4">
        <h1 className="text-center mb-4">Group Lists</h1>
        <div className="text-center mb-4">
            <img className="img-fluid rounded shadow-sm" src="/groups-image.png" alt="Illustration of a group celebrating a shared checklist of completed tasks" width="400" />
        </div>

        <div className="row g-4">
            <section className="col-md-6">
                <h2>Roommates</h2>
                <ul className="list-group">
                    <li className="list-group-item">
                        <input className="form-check-input me-2" type="checkbox" id="group-task-1" />
                        <label className="form-check-label" htmlFor="group-task-1">Mop floor</label>
                    </li>
                    <li className="list-group-item">
                        <input className="form-check-input me-2" type="checkbox" id="group-task-2" checked />
                        <label className="form-check-label" htmlFor="group-task-2">Clean kitchen</label>
                    </li>
                </ul>
            </section>

            <section className="col-md-6">
                <h2>Live Activity</h2>
                <p className="text-muted small">WebSocket placeholder- live activity from other users will appear</p>
                <div className="list-group">
                    <div className="list-group-item activity-item">Kyana just completed "clean stove."</div>
                    <div className="list-group-item activity-item">Madi just added "downstairs living room" to the list.</div>
                </div>
            </section>
        </div>
    </main>
  );
}