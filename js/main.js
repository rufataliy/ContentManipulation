

        const imagesPaths = [
           "./img/img1.jpg",
           "./img/img2.jpg",
           "./img/img3.jpg"
        ];

        const images = [];
        for (let i = 0; i < imagesPaths.length; i++) {
            images[i] = new Image();
            images[i].src = imagesPaths[i];
        }

        // Images ready to be used:
        console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);


        const contentObj = {

            solar:{
                    heading: "Solar Energy",
                    img:"img/img1.jpg",
                    content:`<p>Solar power is usable energy generated from the sun in the form of electric or thermal energy. Solar energy is captured in a variety of ways, the most common of which is with photovoltaic solar panels that convert the sun’s rays into usable electricity.
                            </p>
                            <p>Solar energy is a clean, inexpensive, renewable power source that is harnessable nearly everywhere in the world. Any point where sunlight hits the surface of the earth is a potential location to generate solar power. And since solar energy comes from the sun, it represents a limitless source of power.
                            </p>
                            <p>Interested in benefiting from solar power? Solar panels are installed at three main scales: residential, commercial, and utility. Residential-scale solar is typically installed on rooftops of homes or in open land (ground-mounted) and is generally between 5 and 20 kilowatts (kW), depending on the size of a property. Commercial solar energy projects are generally installed at a greater scale than residential solar. Though individual installations can vary greatly in size, commercial-scale solar serves a consistent purpose: to provide on-site solar power to businesses and non-profits. Finally, utility-scale solar projects are typically large, several megawatt (MW) installations that provide solar energy to a large number of utility customers.
                            </p>
                            <p>For some solar shoppers who may not be able to install solar on their property, community solar is a viable solar option that more directly connects utility-scale solar energy projects to residential consumers. As such, community solar farms are typically built in a central location as opposed to on any single customer’s property. Residential consumers can subscribe to a community solar project to receive many of the benefits of solar power without installing solar panels on their property.
                            </p>`
                  },
            wind:{
                    heading:"Wind Energy",
                    img:"img/img2.jpg",
                    content:`<p>Wind power is the use of air flow
                              through wind turbines to provide the mechanical
                              power to turn electric generators. Wind power, as an
                              alternative to burning fossil fuels, is plentiful, renewable,
                              widely distributed, clean, produces no greenhouse gas emissions
                              during operation, consumes no water, and uses little land. The
                              net effects on the environment are far less problematic than
                              those of fossil fuel sources.</p>
                              <p> Wind farms consist of many individual wind turbines,
                              which are connected to the electric power transmission network.
                              Onshore wind is an inexpensive source of electric power, competitive
                              with or in many places cheaper than coal or gas plants. Offshore wind
                              is steadier and stronger than on land and offshore farms have less visual
                              impact, but construction and maintenance costs are considerably higher.
                              Small onshore wind farms can feed some energy into the grid or provide
                              electric power to isolated off-grid locations.</p>
                              <p> Wind power gives variable power, which is very consistent
                              from year to year but has significant variation over shorter time scales.
                              It is therefore used in conjunction with other electric power sources
                              to give a reliable supply. As the proportion of wind power in a region
                              increases, a need to upgrade the grid and a lowered ability to supplant
                              conventional production can occur. Power-management techniques such as
                              having excess capacity, geographically distributed turbines, dispatchable
                               sources, sufficient </p>`

                  },
            rain: {
                    heading:"Rain Energy",
                    img:"img/img3.jpg",
                    content:`<p>
                              In a study released this August, researchers in the UK developed an
                              electronic device able to harvest energy from laboratory-generated raindrops.
                              To convert the drops’ kinetic energy into electricity, they used a thin film
                              made of PVDF (polyvinylidene fluoride) – a polymer with so-called
                              “piezoelectric” properties, meaning that when it undergoes stress, an
                              electric current is spontaneously produced within the material.
                              </p>
                              <p> To test the device, the researchers dropped artificial raindrops onto the PVDF
                              film from a height to simulate a rainshower. When the drops hit the film, the device
                              generated around 2.5 microwatts of electrical power. This is admittedly a tiny amount,
                              and wouldn’t be able to power any substantial electronic device (for comparison, the
                              average smartphone needs more than 100,000 times as much power to run). But there
                              are reasons to believe that rain power could someday be a viable option.
                              </p>
                              <p>Another way to get more power from rain could be to use a larger collecting surface. These would be exposed to more raindrops, and could thereby scavenge more kinetic energy from the falling liquid. The device in the August study had an area of just 3 cm2 (1.1 in2 ). But the researchers calculated that by increasing this area to 10 m2 (32 ft2), the device could generate 1.5 miliwatts of power, 600 times more than the original device. If this was increased to 100m2, they estimate that the device could yield 20 miliwatts of power, an impressive 8000 fold improvement.
                              </p>
                              <p>Raindrops will probably never be able to compete with a hydroelectric plant or windfarm. But they do have one major advantage — they’re free. Forget damming a river or erecting turbines, soon generating clean power could be as simple as laying out a sheet.
                              </p>
                              `
                    }

        }



const content = document.querySelector(".dynamic-content")
const btn = document.querySelectorAll(".energy-box")
const sun= document.querySelector(".sun")
const turbineHead = document.querySelector(".turbine-head")
const rain = document.querySelector(".rain-box")
const slideBg = document.querySelector(".slideBg")
let heading = document.querySelector(".content-heading")
let img = document.querySelector(".content-img")
let content_text = document.querySelector(".content-text")



heading.innerHTML = contentObj.wind.heading
img.setAttribute("src",`${contentObj.wind.img}`)
content_text.innerHTML = contentObj.wind.content
btn.forEach(a=>a.addEventListener("click", handleSelection))

function handleSelection (e) {
  content.classList.add("load")
  setTimeout(()=>{content.classList.remove("load")},350)
  
  if ((e.target.parentElement.getAttribute("data-key") || e.target.getAttribute("data-key"))  == "1") {
      heading.innerHTML = contentObj.wind.heading
      img.setAttribute("src",`${contentObj.wind.img}`)
      content_text.innerHTML = contentObj.wind.content
      turbineHead.classList.add("spin");
      slideBg.style.backgroundPositionX = "0%"
      document.querySelectorAll(".energy-box-wrap").forEach((e)=>{
        e.classList.remove("active")
      })
      e.target.closest(".energy-box-wrap").classList.add("active")


       setTimeout(()=>{turbineHead.classList.remove("spin")},1500)
  }
    else if ((e.target.parentElement.getAttribute("data-key") || e.target.getAttribute("data-key")) == "2") {
      heading.innerHTML = contentObj.rain.heading
      img.setAttribute("src",`${contentObj.rain.img}`)
      content_text.innerHTML = contentObj.rain.content
       sun.classList.add("spin");
       slideBg.style.backgroundPositionX = "50%"
       setTimeout(()=>{rain.classList.remove("spin")},1500)
       document.querySelectorAll(".energy-box-wrap").forEach((e)=>{
         e.classList.remove("active")
       })
       e.target.closest(".energy-box-wrap").classList.add("active")
  }
    else if ((e.target.parentElement.getAttribute("data-key") || e.target.getAttribute("data-key")) == "3") {
      heading.innerHTML = contentObj.solar.heading
      img.setAttribute("src",`${contentObj.solar.img}`)
      content_text.innerHTML = contentObj.solar.content
    rain.classList.add("rain");
    slideBg.style.backgroundPositionX = "100%"
    setTimeout(()=>{sun.classList.remove("rain")},1300)
    document.querySelectorAll(".energy-box-wrap").forEach((e)=>{
      e.classList.remove("active")
    })
    e.target.closest(".energy-box-wrap").classList.add("active")

  }
}
