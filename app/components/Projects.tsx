const links = [
  {
    title: "Portfolio",
    link: "https://portfolio-suhaas07.netlify.app/",
    imageUrl: "/Projects/portfolio-main.png"
  },
  {
    title: "QR Code Generator",
    link: "https://qr-code-generator07.netlify.app",
    imageUrl: "/Projects/qrCode.png"
  },
  {
    title: "Super Smoothies",
    link: "https://supa-smoothies1.netlify.app",
    imageUrl: "/Projects/supaSmoothies.png"
  },
  {
    title: "Portfolio",
    link: "https://portfolio-suhaas.netlify.app/",
    imageUrl: "/Projects/portfolio.png"
  },
  {
    title: "Chat Application",
    link: "https://suhaasvijay.github.io/chat-application/",
    imageUrl: "/Projects/chat-application.png"
  },
]

export default function Projects() {
  return (
    <main className="flex flex-col items-center h-full py-20">
      <div className='col-span-8 justify-center items-center w-full'>
        <h1 className='text-3xl mb-4'>Projects</h1>
        <div className='justify-center items-center rounded-md grid md:grid-cols-2 xl:grid-cols-3 grid-cols-1 w-full h-full my-10 gap-y-10'>
          {links.map(({ title, link, imageUrl }) => (
            <a
              key={title}
              href={link}
              target='_blank'
              className=" w-[350px] h-[150px] mx-auto flex justify-left items-end p-3 text-lg text-white rounded-2xl"
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 59%, rgba(0, 0, 0, 1) 100%), url(${imageUrl})`,
                backgroundSize: "cover",
              }}
            >
              {title}
            </a>
          ))}
        </div>
      </div>
    </main >
  )
}
