export function Welcome() {
  return (
    <main className="flex flex-col items-center justify-center pt-16 pb-4">
      <div
        className="flex flex-col items-center justify-center gap-8 w-full px-4"
        style={{
          maxWidth: "100vw",
          minHeight: "600px",
          backgroundImage: 'url("/minecraft_pvp1.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col items-center text-3xl font-bold bg-violet-700 p-10 text-white shadow-[5px_5px_0px_0px_rgba(255,255,255,1.0)]">
          Daylin Software House

          {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
          </svg> */}

          <div style={{ height: 10 }} />

          <div className="text-lg font-normal" >
            Minecraft server development, creation and maintenance.
          </div>

          <div style={{ height: 10 }} />

          <div className="flex flex-row items-center text-center text-lg font-normal text-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
            </svg>
            Quality  

            <div style={{ width: 10 }} />

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
            </svg>
            Fast  

            <div style={{ width: 10 }} />

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
            </svg>
            Affordable  
          </div>

          <div style={{ height: 15 }} />

          <div className="flex flex-row items-center text-center text-lg font-normal text-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.867 19.125h.008v.008h-.008v-.008Z" />
            </svg>

            <div style={{ width: 10 }} />

            This site is under construction!

            <div style={{ width: 10 }} />
            
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.867 19.125h.008v.008h-.008v-.008Z" />
            </svg>

          </div>


          {/* <div className="text-lg font-normal text-gray-100 max-w-sm text-center">
            Quality, fast, and affordable Minecraft
            server development, creation and maintenance.
          </div> */}
        </div>
      </div>

      <div style={{ height: 45 }} />

      <div className="text-3xl font-bold text-gray-200 max-w-100 text-center">What We Provide</div>

      <div style={{ height: 45 }} />

      <div className="grid grid-cols-1 md:grid-cols-2 px-4 place-items-center gap-12">
        
        <div className="flex flex-col bg-violet-700 p-10 max-w-100 min-h-125 shadow-[5px_5px_0px_0px_rgba(255,255,255,1.0)]">
          <div className="text-2xl font-bold text-white text-center">Quality</div>
          
          <div style={{ height: 15 }} />
        
          <img
            src="/code_1.png"
            alt="Code example"
            className="w-full max-w-xs rounded shadow-lg border-2 border-white"
          />

          <div style={{ height: 15 }} />
        
          <div className="text-lg font-normal text-white break-words max-w-100 text-center">
            With our teams years of experience, we ensure that your 
            Minecraft server is built to the highest standards, providing 
            a seamless and enjoyable gaming experience.
          </div>
        </div>

        <div className="flex flex-col bg-violet-700 p-10 max-w-100 min-h-125 shadow-[5px_5px_0px_0px_rgba(255,255,255,1.0)]">
          <div className="text-2xl font-bold text-white text-center">Speed</div>
          
          <div style={{ height: 15 }} />
        
          <img
            src="/code_1.png"
            alt="Code example"
            className="w-full max-w-xs rounded shadow-lg border-2 border-white"
          />

          <div style={{ height: 15 }} />
        
          <div className="text-lg font-normal text-white break-words max-w-100 text-center">
            Using our proprietary tools, we can build and modify Minecraft 
            servers in record time, allowing you to focus on your game.
          </div>
        </div>

        <div className="flex flex-col bg-violet-700 p-10 max-w-100 min-h-125 shadow-[5px_5px_0px_0px_rgba(255,255,255,1.0)]">
          <div className="text-2xl font-bold text-white text-center">Affordability</div>
          
          <div style={{ height: 15 }} />
        
          <img
            src="/code_1.png"
            alt="Code example"
            className="w-full max-w-xs rounded shadow-lg border-2 border-white"
          />

          <div style={{ height: 15 }} />
        
          <div className="text-lg font-normal text-white break-words max-w-100 text-center">
            We offer competitive pricing for our services, ensuring that you 
            get the best value for your money without compromising on quality.
          </div>
        </div>

        <div className="flex flex-col bg-violet-700 p-10 max-w-100 min-h-125 shadow-[5px_5px_0px_0px_rgba(255,255,255,1.0)]">
          <div className="text-2xl font-bold text-white text-center">Support</div>
          
          <div style={{ height: 15 }} />
        
          <img
            src="/code_1.png"
            alt="Code example"
            className="w-full max-w-xs rounded shadow-lg border-2 border-white"
          />

          <div style={{ height: 15 }} />
        
          <div className="text-lg font-normal text-white break-words max-w-100 text-center">
            We provide quality ongoing support and maintenance for all our projects
            to ensure continued reliability and quality.
          </div>
        </div>

      </div>

      <div style={{ height: 45 }} />

      <div className="text-sm font-normal text-gray-500 max-w-100 text-center">© 2025 Daylin Software House LLC</div>
    </main>
  );
}
