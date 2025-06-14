import { KeyIcon, LightningIcon, ProcessorIcon, WrenchIcon } from "~/components/Icons";
import { FeatureCard } from "../components/FeatureCard";
import { SectionTitle } from "~/components/SectionTitle";

export function WelcomeCard() {
  return <div className="flex flex-col items-center bg-red-500 p-10 text-white shadow-[5px_5px_0px_0px_rgba(255,255,255,1.0)]">
    <div className="text-3xl font-bold">
      Daylin Software House
    </div>

    <div style={{ height: 10 }} />

    <div className="text-lg font-normal" >
      Minecraft server development, creation and maintenance.
    </div>

    <div style={{ height: 10 }} />

    <div className="flex flex-row items-center text-center text-lg font-normal text-gray-100">
      <ProcessorIcon />
      Quality  

      <div style={{ width: 10 }} />

      <LightningIcon />
      Fast  

      <div style={{ width: 10 }} />

      <KeyIcon />
      Affordable  
    </div>

    <div style={{ height: 15 }} />

    <div className="flex flex-row items-center text-center text-lg font-normal text-gray-100">
      <WrenchIcon />

      <div style={{ width: 10 }} />

      This site is under construction!

      <div style={{ width: 10 }} />
      
      <WrenchIcon />
    </div>
  </div>;
}

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
        <WelcomeCard />
      </div>

      <div style={{ height: 45 }} />

      <SectionTitle title="What We Provide" />

      <div style={{ height: 45 }} />

      <div className="grid grid-cols-1 md:grid-cols-2 px-4 place-items-center gap-12">
        
        <FeatureCard name="Quality" image="/code_1.png">
          With our teams years of experience, we ensure that your 
          Minecraft server is built to the highest standards, providing 
          a seamless and enjoyable gaming experience.
        </FeatureCard>
        
        <FeatureCard name="Speed" image="/code_1.png">
          Using our proprietary tools, we can build and modify Minecraft 
          servers in record time, allowing you to focus on your game.
        </FeatureCard>
        
        <FeatureCard name="Affordability" image="/code_1.png">
          We offer competitive pricing for our services, ensuring that you 
          get the best value for your money without compromising on quality.
        </FeatureCard>
        
        <FeatureCard name="Support" image="/code_1.png">
          We provide quality ongoing support and maintenance for all our projects
          to ensure continued reliability and quality.
        </FeatureCard>

      </div>

      <div style={{ height: 45 }} />

      <SectionTitle title="Our Internal Projects" />

      <div style={{ height: 45 }} />

      <div className="grid grid-cols-1 md:grid-cols-2 px-4 place-items-center gap-12">
        
        <FeatureCard name="Modular" image="/code_1.png">
          This is our premier tool for building Minecraft projects quickly and 
          efficiently using cutting-edge proprietary technology to deliver projects 
          quickly while maintaining quality.
        </FeatureCard>

        <FeatureCard name="Project War Cross" image="/code_1.png">
          A test project that showcases the capabilities of our Modular tool set to
          quickly build and modify Minecraft servers.  This project would have taken
          roughly 4 days to make the first prototype but instead only required 2 to
          complete.
        </FeatureCard>

        <FeatureCard name="Project Tavern" image="/code_1.png">
          A work-in-progress game mode meant to push the limits of Minecraft by creating a unique game
          based around players entering a magical world to hunt bosses, find treasure, 
          solve puzzles, return to The Tavern with the spoils.
        </FeatureCard>

      </div>

      <div style={{ height: 45 }} />

      <div className="text-sm font-normal text-gray-500 max-w-100 text-center">© 2025 Daylin Software House LLC</div>
    </main>
  );
}
