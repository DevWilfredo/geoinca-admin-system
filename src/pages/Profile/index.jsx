import InputComponent from "../../components/Input"


const userProfileFields = [
    {
        id: "firstName",
        label: "Nombre",
        type: "text",
        helperText: "Tu nombre de pila"
    },
    {
        id: "lastName",
        label: "Apellido",
        type: "text",
        helperText: "Tu apellido o apellidos"
    },
    {
        id: "email",
        label: "Correo Electrónico",
        type: "email",
        helperText: "Correo con el que accedes"
    },
    {
        id: "phone",
        label: "Teléfono",
        type: "tel",
        helperText: "Número de contacto"
    },
    {
        id: "address",
        label: "Dirección",
        type: "text",
        helperText: "Dirección de residencia"
    },
    {
        id: "city",
        label: "Ciudad",
        type: "text",
        helperText: "Ciudad donde vives"
    },
    {
        id: "country",
        label: "País",
        type: "text",
        helperText: "Tu país de residencia"
    },
    {
        id: "postalCode",
        label: "Código Postal",
        type: "text",
        helperText: "Código postal de tu zona"
    }
]

const Profile = ()  => {
    return (
        <section className="px-8 py-8 container mx-auto">
            <h5 className="text-xl font-semibold text-blue-gray-900">
                Basic Information
            </h5>
            <p className="text-sm font-light text-gray-600 mt-1">
                Update your profile information below.
            </p>

            <form className="flex flex-col mt-8">
                <div className="mb-6 grid grid-cols-2 items-end gap-4">
                    {userProfileFields.map((field) => (
                        <div key={field.id} className="w-full">
                            <InputComponent
                                id={field.id}
                                label={field.label}
                                type={field.type}
                                helperText={field.helperText}
                            />
                        </div>
                    ))}
                </div>

                {/* Botón de enviar */}
                <button
                    type="submit"
                    className="self-start mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors cursor-pointer"
                >
                    Guardar Cambios
                </button>
            </form>
        </section>
    )
}

export default Profile
