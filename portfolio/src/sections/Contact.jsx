import { useRef, useState } from "react"
import emailjs from '@emailjs/browser'

const Contact = () => {
    const formRef = useRef()
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = ({ target: { name, value }}) => {
        setForm({ ...form, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true)

        try {
            await emailjs.send(
                'service_e90qjdt',
                'template_j8d2zb2',
                {
                    from_name: form.name,
                    to_name: 'Leonardo',
                    from_email: form.email,
                    to_email: 'leonardofarias.comercial@gmail.com',
                    message: form.message
                },
                'GkJF221y6XWLnNizo'
            )

                setLoading(false);

                alert('Thank you. I will get back to you as soon as possible.');

                setForm({
                    name: '',
                    email: '',
                    message: ''
                })
        } catch (error) {
            setLoading(false);

            alert('Something went wrong. Please try again.');
        }

        
    }

  return (
    <section className="c-space my-20" id="contact">
        <div className="relative min-h-screen flex items-center justify-center flex-col p-4">
            <img src="/assets/terminal.png" alt="terminal background" className="absolute inset-0 min-h-screen mx-auto h-full" />
            <div className="contact-container py-4">
                <h3 className="head-text">Let's talk</h3>
            <p className="text-lg text-white-600 mt-3">
                Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to
                life, I’m here to help.
            </p>

            <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col xl:space-y-3">
                <label className="space-y-3">
                <span className="field-label">Full Name</span>
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="field-input"
                    placeholder="ex., John Doe"
                />
                </label>

                <label className="space-y-3">
                <span className="field-label">Email address</span>
                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="field-input"
                    placeholder="ex., johndoe@gmail.com"
                />
                </label>

                <label className="space-y-3">
                <span className="field-label">Your message</span>
                <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="field-input"
                    placeholder="Share your thoughts or inquiries..."
                />
                </label>
                
                <button className="field-btn" type="submit" disabled={loading}>
                    {loading ? 'Sending...' : 'Send Message'}

                    <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
                </button>
                </form>
            </div>
        </div>

        
    </section>
  )
}

export default Contact