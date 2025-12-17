import React from "react";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard-bg py-4">
      <div className="container">

        {/* HEADER */}
        <div className="mb-4">
          <h3 className="fw-bold">Dashboard</h3>
          <p className="text-muted">Vue globale de vos finances</p>
        </div>

        {/* SOLDE */}
        <div className="card balance-card mb-4">
          <div className="card-body">
            <p className="mb-1">Solde global</p>
            <h2>1506 TND</h2>
          </div>
        </div>

        {/* STATS */}
        <div className="row mb-4">
          <div className="col-md-4 mb-3">
            <div className="card stat-card">
              <div className="card-body">
                <small>Revenus totaux</small>
                <h5 className="text-success fw-bold">2000 TND</h5>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card stat-card">
              <div className="card-body">
                <small>Dépenses totales</small>
                <h5 className="text-danger fw-bold">-494 TND</h5>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card stat-card">
              <div className="card-body">
                <small>Transactions</small>
                <h5 className="fw-bold">4</h5>
              </div>
            </div>
          </div>
        </div>

        {/* BUDGET + CATEGORIE */}
        <div className="row mb-4">
          <div className="col-md-6 mb-3">
            <div className="card">
              <div className="card-body">
                <h6 className="fw-bold">Budget du mois</h6>
                <p className="text-success">50 / 1000 TND</p>
                <input type="range" className="form-range" />
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-3">
            <div className="card">
              <div className="card-body">
                <h6 className="fw-bold">Top catégorie</h6>
                <p className="mb-0">Resto</p>
                <small className="text-muted">Total : 444 TND</small>
              </div>
            </div>
          </div>
        </div>

        {/* TABLE */}
        <div className="card">
          <div className="card-body">
            <h6 className="fw-bold mb-3">Dernières transactions</h6>
            <table className="table table-hover">
              <thead className="table-light">
                <tr>
                  <th>Date</th>
                  <th>Catégorie</th>
                  <th>Type</th>
                  <th>Montant</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>11/12/2025</td>
                  <td>Courses</td>
                  <td>Dépense</td>
                  <td className="text-danger">-50 TND</td>
                </tr>
                <tr>
                  <td>05/12/2025</td>
                  <td>Salaire</td>
                  <td>Revenu</td>
                  <td className="text-success">1500 TND</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
