
import { useState, useRef } from "react";
const solicitudesPrevias = [
  {
    id: 'SOL-001',
    motivo: 'Licencia médica',
    estado: 'Aprobada',
    comentario: 'Presentó documentación válida',
    detalle: 'Tuve una cirugía y adjunto la orden médica',
    archivo: 'orden_medica.pdf',
    fecha: '2024-11-10',
  },
  {
    id: 'SOL-002',
    motivo: 'Permiso personal',
    estado: 'Pendiente',
    comentario: '',
    detalle: 'Necesito ausentarme por un tema familiar',
    archivo: '',
    fecha: '2025-01-15',
  },
  {
    id: 'SOL-003',
    motivo: 'Otro',
    estado: 'Rechazada',
    comentario: 'Falta documentación',
    detalle: 'Solicito dos días libres por mudanza',
    archivo: '',
    fecha: '2025-02-20',
  },
];
const statusColor = {
  Aprobada: 'badge-success',
  Pendiente: 'badge-warning',
  Rechazada: 'badge-error',
};

const motivos = ['Licencia médica', 'Permiso personal', 'Otro'];
const jefes = ['Laura García', 'Carlos Méndez', 'Ana Torres'];

const RequestsComponent =()=>{
  const [fileSelected, setFileSelected] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [notBoss, setNotBoss] = useState(false);
  const [bossSelected, setBossSelected] = useState('');
  const selectRef = useRef(null);

const blurSelect = (e) =>{
    selectRef.current.blur();
}

  const handleBossSelect = (e) => {
      blurSelect(e);
     
    setBossSelected(e.target.value);
  }
  
const handleNotificarJefe = (e) => {
    setNotBoss(e.target.checked);
}

  const handleFileChange = (e) => {
    setFileSelected(e.target.files.length > 0);
  };

  const handleVerSolicitud = (solicitud) => {
    setModalData(solicitud);
    document.getElementById('modal-solicitud').showModal();
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <h2 className="text-2xl font-bold">Nueva Solicitud / Estado de solicitudes</h2>

      {/* Formulario de Nueva Solicitud */}
      <div className="card bg-base-100 shadow-lg/20 p-6 space-y-4">
        <select className="select select-bordered">
          <option disabled selected>Selecciona un motivo</option>
          {motivos.map((m, i) => (
            <option key={i}>{m}</option>
          ))}
        </select>

        <textarea
          className="textarea textarea-bordered w-full"
          placeholder="Explicación de la solicitud..."
          rows="4"
        />

        <div className={`max-w-100 border-2 p-4 rounded ${fileSelected ? 'border-success' : 'border-base-300'}`}>
          <input type="file" onChange={handleFileChange} />
        </div>

        <div className="form-control flex items-center">
          <label className="cursor-pointer label pr-3">
            <span className={`${notBoss ? 'text-white': 'label-text'}`}>¿Notificar a tu jefe directo?</span>
            <input type="checkbox" className="toggle toggle-primary" onClick={handleNotificarJefe} checked={notBoss}/>
          </label>
          <select ref={selectRef} className={`select select-bordered mt-2 ${bossSelected ?  'border-success' : 'border-base-300'}`} onChange={handleBossSelect}>
            <option disabled selected>Selecciona a tu jefe</option>
            {jefes.map((j, i) => (
              <option key={i}>{j}</option>
            ))}
          </select>
        </div>
                <div className="flex justify-center ">
        <button className="btn btn-primary">Enviar Solicitud</button>

                </div>
      </div>

      {/* Lista de Solicitudes Previas */}
      <section>
        <div className="bg-base-100 shadow-sm rounded-xl p-4 overflow-x-auto">
          <h2 className="text-lg font-semibold mb-2">Solicitudes anteriores</h2>
          <table className="table table-zebra">
            <thead>
              <tr>
                <th>ID</th>
                <th>Motivo</th>
                <th>Fecha</th>
                <th>Estado</th>
                <th>Ver</th>
              </tr>
            </thead>
            <tbody>
              {solicitudesPrevias.map((sol) => (
                <tr key={sol.id}>
                  <td>{sol.id}</td>
                  <td>{sol.motivo}</td>
                  <td>{sol.fecha}</td>
                  <td>
                    <span className={`badge ${statusColor[sol.estado]}`}>
                      {sol.estado}
                    </span>
                  </td>
                  <td>
                    <button className="btn btn-sm btn-outline" onClick={() => handleVerSolicitud(sol)}>
                      Ver
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ─── Modal ─── */}
      <dialog id="modal-solicitud" className="modal">
        <div className="modal-box">
          {modalData && (
            <>
              <h3 className="font-bold text-lg">{modalData.motivo}</h3>
              <p className="py-2"><strong>Detalle:</strong> {modalData.detalle}</p>
              <p><strong>Archivo adjunto:</strong> {modalData.archivo || 'Ninguno'}</p>
              <p>
                <strong>Estado:</strong>
                <span className={`ml-2 badge ${statusColor[modalData.estado]}`}>
                  {modalData.estado}
                </span>
              </p>
              {modalData.comentario && (
                <p className="mt-2">
                  <strong>Comentario RRHH:</strong> {modalData.comentario}
                </p>
              )}
            </>
          )}
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Cerrar</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
export default RequestsComponent;    