import React, { useState } from "react";
import InputComponent from "../Input";

const fuelLogData = [
  {
    id: "location",
    label: "Ubicación",
    type: "text",
    helperText: "Ingrese la ubicación del repostaje",
  },
  {
    id: "date",
    label: "Fecha",
    type: "date",
    helperText: "Seleccione la fecha del repostaje",
  },
  {
    id: "mileage",
    label: "Kilometraje",
    type: "number",
    helperText: "Ingrese el kilometraje del vehículo",
  },
  {
    id: "liters",
    label: "Litros",
    type: "number",
    helperText: "Ingrese la cantidad de litros repostados",
  },
  {
    id: "pricePerLiter",
    label: "Precio €/L",
    type: "number",
    helperText: "Ingrese el precio por litro",
  },
  {
    id: "receipt",
    label: "Ticket de Repostaje (opcional)",
    type: "file",
    helperText: "Adjunte una imagen del ticket si lo desea",
  },
];

const hardcodedLogs = [
  {
    date: "2025-05-20",
    location: "Madrid",
    mileage: 15230,
    liters: 45,
    pricePerLiter: 1.65,
    totalPrice: (45 * 1.65).toFixed(2),
    receipt: null,
  },
  {
    date: "2025-05-12",
    location: "Barcelona",
    mileage: 14890,
    liters: 40,
    pricePerLiter: 1.62,
    totalPrice: (40 * 1.62).toFixed(2),
    receipt: null,
  },
  {
    date: "2025-05-05",
    location: "Valencia",
    mileage: 14450,
    liters: 42,
    pricePerLiter: 1.68,
    totalPrice: (42 * 1.68).toFixed(2),
    receipt: null,
  },
  {
    date: "2025-04-28",
    location: "Sevilla",
    mileage: 14020,
    liters: 38,
    pricePerLiter: 1.7,
    totalPrice: (38 * 1.7).toFixed(2),
    receipt: null,
  },
  {
    date: "2025-04-21",
    location: "Zaragoza",
    mileage: 13600,
    liters: 44,
    pricePerLiter: 1.6,
    totalPrice: (44 * 1.6).toFixed(2),
    receipt: null,
  },
];
const BillsComponent = () => {
  return (
    <div className="p-4 mx-auto">
      <h5 className="text-xl font-semibold text-blue-gray-900">
        Matrícula 123-XYZ
      </h5>
      <p className="text-sm font-light text-gray-600 mt-1">
        Agregue la información de su repostaje
      </p>

      <form className="flex flex-col mt-8">
        <div className="mb-6 grid grid-cols-3 items-end gap-4">
          {fuelLogData.map((field) => (
            <div key={field.id} className="w-full">
              <InputComponent
                id={field.id}
                name={field.id}
                label={field.label}
                type={field.type}
                helperText={field.helperText}
              />
            </div>
          ))}
        </div>

        <button
          type="submit"
          className="self-start mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors cursor-pointer"
        >
          Guardar Repostaje
        </button>
      </form>

      <div className="mt-8 space-y-4 border-t-2 border-t-sky-950 pt-6">
        <h2 className="text-xl font-semibold text-center">
          Historial de Repostajes
        </h2>

        <div className="overflow-x-auto rounded-lg border border-sky-950">
          <table className="table w-full text-sm">
            <thead className="bg-sky-950 text-shadow-indigo-100 font-medium text-left">
              <tr>
                <th className="p-2">Fecha</th>
                <th className="p-2">Ubicación</th>
                <th className="p-2">Kilometraje</th>
                <th className="p-2">Litros</th>
                <th className="p-2">€/L</th>
                <th className="p-2">Total</th>
                <th className="p-2">Ticket</th>
              </tr>
            </thead>
            <tbody>
              {hardcodedLogs.map((log, index) => (
                <tr key={index} className="hover:bg-sky-700 border-t">
                  <td className="p-2">{log.date}</td>
                  <td className="p-2">{log.location}</td>
                  <td className="p-2">{log.mileage} km</td>
                  <td className="p-2">{log.liters} L</td>
                  <td className="p-2">€{log.pricePerLiter}</td>
                  <td className="p-2 font-semibold">€{log.totalPrice}</td>
                  <td className="p-2">
                    {log.receipt ? (
                      <img
                        src={URL.createObjectURL(log.receipt)}
                        alt="Ticket"
                        className="h-10"
                      />
                    ) : (
                      <span className="text-gray-400 italic">No adjunto</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BillsComponent;
