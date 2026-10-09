import React from 'react';

export function Week() {
  return (
    <main className="container py-4">
        <h1 className="text-center mb-4">This Week</h1>
        <div className="text-center mb-4">
            <img className="img-fluid rounded shadow-sm" src="/week-image.png" alt="Illustration of a person climbing a pencil next to a completed checklist" width="400" />
        </div>
        
        <div className="row g-4 mb-4">

            <section className="col-md-6">
                <h2>Tasks</h2>
                <ul className="list-group">
                    <li className="list-group-item">
                        <input className="form-check-input me-2" type="checkbox" id="task-1" />
                        <label className="form-check-label" htmlFor="task-1">Finish essay draft</label>
                    </li>
                    <li className="list-group-item">
                        <input className="form-check-input me-2" type="checkbox" id="task-2" />
                        <label className="form-check-label" htmlFor="task-2">Take marketing exam</label>
                    </li>
                </ul>
            </section>

            <section className="col-md-6">
                <h2>Weekly Goals</h2>
                <ul className="list-group">
                    <li className="list-group-item">
                        <label className="form-label" htmlFor="goal-1">Run 3 times this week</label>
                        <progress className="goal-progress" id="goal-1" value="2" max="3"></progress>
                    </li>
                    <li className="list-group-item">
                        <label className="form-label" htmlFor="goal-2">Read twice this week</label>
                        <progress className="goal-progress" id="goal-2" value="1" max="2"></progress>
                    </li>
                </ul>
            </section>
        </div>

        <form className="card p-4">
            <h2>Add to Week</h2>
            <label className="form-label" htmlFor="new-item">Item</label>
            <div className="input-group">
                <input className="form-control" type="text" id="new-item" name="item" required />
                <button className="btn btn-primary" type="submit">Add</button>
            </div>
        </form>
    </main>
  );
}