export interface FormData {
    name: string
    phone: string
    organisation_name: string
    organisation_type: number
    objects: number
}

export const submitForm = async (form: FormData) => {
    const response = fetch("http://sss", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
    })
}