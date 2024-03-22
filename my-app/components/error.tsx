// Error Message For Authentication



const message = `Didn't receive an email? Click this.`

export const FormError = () => {
    if (!message) return null;
    return (
        <div className=" mt-4 pl-2 rounded flex items-center gap-x-2 text-sm underline font-bold  ">
            
            <a href='https://nizzyabi-roadmap.com/'>{message}</a>
        </div>
    )
}