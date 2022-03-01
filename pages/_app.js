import '../styles/globals.css'
function MyApp({ Component, pageProps }) {
  return (
    <div className="grid sm:grid-cols-6 h-screen">
      <div className="sm:col-span-3 md:col-span-2 h-full" >
        <Component {...pageProps}/>
      </div>
      <div className="hidden sm:grid bg-primary h-full sm:col-span-3 md:col-span-4">
      </div>
    </div>
  )
}

export default MyApp