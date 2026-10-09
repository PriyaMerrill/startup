import React from 'react';

export function Today() {
  return (
        <main className="container py-4">
            <h1 className="text-center mb-4">Today</h1>
            <div className="text-center mb-4">
                <img className="img-fluid rounded shadow-sm" src="/today-image.png" alt="Illustration of a person climbing a ladder made of completed tasks while working on a laptop" width="400" />
            </div>

            <div className="row g-4">
                <section className="col-md-6">
                    <h2>Your Calendar (Google Calendar API)</h2>
                    <div className="table-responsive">
                        <table className="table table-striped table-bordered bg-white">
                            <caption>Today's calendar events</caption>
                            <thead className="table-dark">
                                <tr>
                                    <th>Time</th>
                                    <th>Event</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>9:00 AM</td>
                                    <td>Work meeting</td>
                                </tr>
                                <tr>
                                    <td>2:00 PM</td>
                                    <td>Class</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <section className="col-md-6">
                    <h2>Today's Tasks</h2>
                    <ul className="list-group mb-3">
                        <li className="list-group-item">
                            <input className="form-check-input me-2" type="checkbox" id="today-task-1" />
                            <label className="form-check-label" htmlFor="today-task-1">Finish essay draft</label>
                        </li>
                        <li className="list-group-item">
                            <input className="form-check-input me-2" type="checkbox" id="today-task-2" />
                            <label className="form-check-label" htmlFor="today-task-2">Run 30 minutes</label>
                        </li>
                    </ul>
                    <div className="alert alert-success" role="alert">
                        Planned: 3 hours &mdash; Free time today: 5 hours. This fits
                    </div>
                </section>
            </div>
        </main>
  );
}