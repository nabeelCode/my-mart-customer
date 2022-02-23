import '../styles/globals.css'
function MyApp({ Component, pageProps }) {
  return (
    <div className="grid sm:grid-cols-6">
      <div className="sm:col-span-2 h-full" >
        <Component {...pageProps}/>
      </div>
      <div className="hidden sm:grid bg-primary  sm:col-span-4">
      </div>
    </div>
  )
}

export default MyApp