/*
Configuration
------------------------
If something doesn't work please contact me on discord (Astronawta#0012).
*/

const config = {
    serverInfo: {
        serverLogoImageFileName: "logo.png", /*This is a file name for logo in /images/ (If you upload new logo with other name, you must change this value)*/
        serverName: "Nikashi SMP", /*Server name*/
        serverIp: "nikashi.minecraftindonesial.my.id:22069", /*Server IP (if you want to add online user counter, you must have true the enable-status and enable-query of server.properties)*/
        discordServerID: "1278672938064941126" /*Your server ID (if you want to add online user counter, you must have enabled Discord server widget)*/
    },

    /*Admin-Team
    ------------
    If you want to create new group, you must add this structure to adminTeamPage:
    <nameOfGroup>: [
        {
            inGameName: "Astronavta",
            rank: "Owner",
            skinUrlOrPathToFile: "",
            rankColor: ""
        },
    ]
    then you must add this group with same name to atGroupsDefaultColors and set the color you want for the group.
    You can also set a special color for a specific user, just put it in the rankColor of that user.

    All skins for original players are generate automaticaly. If you want to add skins to warez players, yout must add url for skin to skinUrlOrPathToFile
        {
            inGameName: "Astronavta",  <--- In-Game name
            rank: "Owner",  <-- rank
            skinUrlOrPathToFile: "",  <-- url or file path for skin image for warez players (if you have original minecraft leave it be empty)
            rankColor: "rgba(255, 3, 3, 1)"  <-- special rank color
        },

    If you want to change skin type replace userSKinTypeInAdminTeam with something you want from array in comments
    */
    userSKinTypeInAdminTeam: "bust", /*[full, bust, head, face, front, frontFull, skin]*/
    atGroupsDefaultColors: {
        leaders: "rgba(255, 124, 124, 0.5)",
        developers: "rgba(230, 83, 0, 0.5)",
        helpers: "rgba(11, 175, 255, 0.5)",
        builders: "rgba(247, 2, 176, 0.5)",
    },
    adminTeamPage: {
        pendiri: [
            {
                inGameName: "Nikashi33",
                rank: "Pemilik",
                skinUrlOrPathToFile: "https://vzge.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",
                rankColor: "rgba(180, 0, 180, 1)"
            },
        ],
        manajer: [
            {
                inGameName: "Reyya",
                rank: "Pimpinan Eksekutif Utama",
                skinUrlOrPathToFile: "https://vzge.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",
                rankColor: "rgba(239, 47, 47, 1)"
            },
        ],
        moderator: [
            {
                inGameName: "ZEROGAMING",
                rank: "Pengatur",
                skinUrlOrPathToFile: "https://vzge.me/bust/iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAAXNSR0IArs4c6QAAAHVQTFRFAQEB//+78+739e613tjs+tZyysnW4bxsq6a6qpvA0YBYg3ycvmYmnFo/a2CQaV2DkEMkVkxxVExxkzYoUUpqUEhrRTpmZS0sODNRLypLKyZGIh06GxkxGBQrEw8kEg4jEAwfDgwfCwkYCgkXBwURBAMNAAAA2OIqqwAAAAF0Uk5TAEDm2GYAAAO7SURBVHjazZbtdqMgEIZnE6Owrm5D2wgR09iq93+JOx/M8ajJSXvaH/uEkBmBlxF0AijOOWOwKl2JuBJWYINUOSA5KFsB4b6AcFdAFdyXBeJHNAarexFEiFLdw5zOxpxPpixrZCsApzPA+QR3MQlXW6R28FWeni5cSpshdhPB7wMcsPx+KGAzxsKKwy/4heUAhuNdrH405glhAcSY6BhjHBNpfhWgGLhdd8Xh0p8/LpfL5JAJDXSjUQF+orAdAAtX2I5GWRpsoQq7xdPHGXeeKcvzxymahQC1yyoDQu0kkKNnchTIS2PKk3Mj49yJ/JyG5jmqGtlDY3L0IUcTCPQBQRVnqCPO9fz8/v787NTXCHLpzwNQQMJAM5cIcsBeVJx7/3O5/Hl3TnwazF8eTSEDQr/ki4R86fXDMo6Xw253uIyj+M6l3/y2gNwOVaV0tLr/Vvxy/Vqv93/xWvcxxn4YJkgMw9D3WMUEJPCarWvYshUorC1uCmT2tkC/FGhIoBlQdhvBZwR8U8RYNB4FHkfQIySQoFv3KuDR0fXoiSHRw8xABL3dQN7x+Hc/Tfu/x6MMjxGHSnPPhAgzlrgOQbhanudYDUN1lGlTZIKGBDMZ0dqasW02EDxh6h0DadyLQAUyy6Ahg3xE2OStCFFCjKq5vgWvEXgrU/QBSdOhgyKW0G4WZjzx4lvGt14G+SQwr0HG1EyWrQW8CnivaxDnPevJzojdDYEXoWXQuF6vKPT66l/bK4MO6l8zxjILgVZ4Y9CYI+g1ALZ3TM3sdjDTEftQVX1fVaHoekJ2bbEGXVF0XTGOTTOORbd+lIuuaaapabpK+8c1NrPbRZyJEW4RGXiACnyPnxXwEpKHCBH5nIAg41UAPk1YGJQPACgfqLjWQXttCQIIRxgGrD5PuzHmW48Bv1gIjSDCA9azByxEnDWX+JURuH+y0dnsxDYf6HgxwnEWiAz8DDvY8iIAowbmA3iFBOWDn5icUXubD4AJ8qYvHuHIgOQDYLDXCr3SVXBH4GsvM2WUif8BBTTr2n5TwGb/bQSRWXiLjDww+t/8KCEElQgDE5JSSFf7ZXexmdkTrpa5hlAR+6KY8FNUIKi/TAjyo+cEPTc0RFX1+KmqBgT14QZ6TtBzQzoQMHEAQf1NQvAagbfLc0OihjtgQmBQoSXUb31bE1mihseIgJIEdiuB3TYpKCIw+62sScLCY9I5QXmTCBIagfqghH3HFAH4nDD7VToQpOMBCOqDombVgZwTip6pukYX0Wb25iL+A1Rhp461V3hvAAAAAElFTkSuQmCC",
                rankColor: "rgba(6, 152, 255, 1)"
            },
            {
                inGameName: "ChaacaaAllysa",
                rank: "Pengatur",
                skinUrlOrPathToFile: "https://vzge.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",
                rankColor: "rgba(6, 152, 255, 1)"
            },
            {
                inGameName: "ARGAMER37018",
                rank: "Pengatur",
                skinUrlOrPathToFile: "https://vzge.me/bust/256/iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAB1xJREFUeF7tW01sVFUUPtO/oQGLLfgDDWgiiwImupCFMVEiEoyJiaILTRNxYVITjOCGRJFuUBe4gBBJbKJGF9Vu+ElcNdGFGle4IREhBjC2ARQjhUIt078x32u+55kz97373ryZ6Y/czbzXe9+553znO+f+Niee8uxDa4rjE1ORrX660BIr4Vrh95yvj6z1y6WrmMuPl4lJ0rdXuafWryq2tjQJQMAvCp4nJwrStmyp/HC2QYqFVqcNUCqJEkkBgC5o+82Zyzk84/fO/H3FqP7R9rqcjbWxrPLisYNBJyw79h4IHmEwCowevTkmzS354G/4jStQMqmBvnY0mu3wfvLM8kgjwYzUABSLxeK6zruDPs5dvCJbN6wOAYDx9D4B+PLDfbF6d25/qyoA0PtkgA+spPVe5XQIkAU0Hp3UGwDSv1pAJAIAnSH+SX2GBID44v09dWeAzQNJve1qlxgAbTQFgRH1YICL/joh1g0AOxqAEQTgn5lGuTUxKUtamoPfjiUNgV7VyAE2+9PgaiTYYDhJiyCB0DlBs8I3Muj+khgBHW3+QR+ub+1I4bMtAEAbBMEuT8cZpdtz0mRzBhXRbcGg785fDcPQRWvqh+/RnsMw5RGIuJDAZI75i/0zj4QMIMKosGP8wP43g/4KDUtCQPMzt+SlfYfDIVIjze85bFovaMABQJzXoDy+//rUcM71bEFEWwuGZZCeSIUAWC+6jHbRCUCgEIwoNujpNCdQaAvDKNcFBBlAANhee1WHAmVYWU880FF0hU1JCFB5a/zq53cLJkfff/ROoOvjb3wQTJIuHT8kAGCqMS9N04USRsD7KHrazOm0nknaELBxzbVINeLdxYwckNHTWygNADTd8bert2aCDI+iszy9p5lgwwltNO0ZGpYBlmFxxqMt6jWDfAnPVZ/DfFlXbFp/vQwAGI/CoY1DHt81COu6Pw4XR1gMYaHCX7Tjqs3+nTI4d6/UOGuPD5RwNaWV/OVYT8l3NJh/tGM9/75he19ZfxoEVNqVGw3WivsWMFFGcVmMPrSMKFDQpmwmuFIeKU7l/5Kmwl0yKTfFguGb2OjOrOehmJVnjUkqn0yabrgZijjb/27qiZcTABjOkhUAbWC1AJiRKWnMTwaiawZAsyzLxAB46PRXu0P7N758KKB/NRhQcwCgNcIARRuB9zQU1d8yP1QDAJ1MMzPg8M6tZWuBfUeGBQxA6d3ZXhKmqIN3kSNQ1/vJr86cdG9+k3z7+WNB3ZZXf5Q/Cid9CdlZH7fd5kqqFML840uoOQCwtGk67HxsqlH4jmeUuHoAoJVkx6vaHpTLoz8L6NrZ9nD4jNjV7Rlq6KdRZvcWp2V2gxOypgvN0iCze5EokMd39mW/0wzx7UlmBgCM0AUGrWy7X66Mng8NIRguF+uRgiBoADRY2ngtCwBMyo0QGJ0j6g4APU4A8I6ivaiV116k4ZbG9Hyz3BGAqj2OZ35HgOYUAE1prVASAEh/fkdw+E5jLRMIiGYBQax5DnCFQEGuCb3ly3w2BHSs63wBozUD4HUNjM4dGqC6A6A717EZFQrayzAQXqShGhwrl7S38W/zSE0A4MiAUcLFAMwko2LThoJeHLmy/Ln+130kiq1f+eLb8SdDe57bmHpPUPfYd+K/IVQbMCEj0iKzcwj9bLW1ANgEWXMA7FFYWrjtChBJcEyGQ+MpLwoEANBQ6CjJ5Bw1ULcgAeBiSieuKGBdDGD4BBMhtdpL6xy0vzH+d3wIZGUAFzmusdtOVpC4bNZ3bZpoWXEAYPnrKl3d74V/9gLgQ3Xbtm3F9vbZWB4ZGZHBwUHvaZJP5nyq9xpzG4DbDPifh8B8itda6OLNAbXodD7JvA1AnbyB6fa8BLtWSs1bg8vWInViwLztplYMqJrBrXJPptXquPyZ7qJk1TRfIIJyWfcDDpw47UQYniP6+jktLnPCgP7+/oB23d3dFYWIy+BKQVi7dm2mEBgaGooPASx2rFf06s/nsVqvDuMAiDJOf1MRAD6jdX2tAUijSyVtvRTXy2F0MDAwEPsN7xfwBkjaw1Vcf9eG4Ps0GxxpQUgFQJINEV6Q4AHqqWPdJTr5TpcXBQA8HcJvWgD0NRcgh+P0BcUA/gcH9/oquWGid4rnHABfTNn7BbxbgJ3h/TvXOD/nHQNUus7/o47LKIw7yXj3nf769PfmAJ+AT3c9WZK04u4X2PsGeN975LfwKEyf6hKYuCO1RQEA2MBzgKhfGGpPhgnWgmcAANBedl2CsAcsbI/T40UBADxsDXdR33WFZlEAYE+ScTyOYu8A6BskBMx3/O3LYXOeBPXxuuusPyokcMyO9uNyyWdjbH3dAOAIAG30LbQXtjwTXLl3FdxYj6pje9/5vw+dzPsBvg589bteec3XJLa+a0ev9PX1SU9P6QVv/dHxo0dly+bN0rZiRZksJwPS7AdkPV3OZL2IPLr7YCYRuaz7AZ/1PJ1JAT3Pr0SQ6/g76SYK9gqcAKRRJCsArr6SglLJ9Xjb37+sqN7leYJoqQAAAABJRU5ErkJggg==",
                rankColor: "rgba(6, 152, 255, 1)"
            },
            {
                inGameName: "chrisAntera",
                rank: "Pengatur",
                skinUrlOrPathToFile: "https://vzge.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",
                rankColor: "rgba(6, 152, 255, 1)"
            },
        ]
    },

    /*
    Contact form
    ------------
    To activate, you need to send the first email via the contact form and confirm it in the email.
    Emails are sent via https://formsubmit.co/
    */
    contactPage: {
        email: "nikashismp@gmail.com"
    }
}

/*If you want to change website color go to /css/global.css and in :root {} is a color pallete (don't change names of variables, change only values)*/







/*Product Navbar*/
const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})








/*If you want everything to work as it should and you don't understand what is written here, don't touch it :D*/


/*Mobile navbar (open, close)*/
const navbar = document.querySelector(".navbar");
const navbarLinks = document.querySelector(".links");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
    navbar.classList.toggle("active");
    navbarLinks.classList.toggle("active");
})

/*FAQs*/
const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", () => {
        accordionItemHeader.classList.toggle("active");
        const accordionItemBody = accordionItemHeader.nextElementSibling;

        if(accordionItemHeader.classList.contains("active")) accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        else accordionItemBody.style.maxHeight = "0px";
    });
});

/*Config navbar*/
const serverName = document.querySelector(".server-name");
const serverLogo = document.querySelector(".logo-img");
/*Config header*/
const serverIp = document.querySelector(".minecraft-server-ip");
const serverLogoHeader = document.querySelector(".logo-img-header");
const discordOnlineUsers = document.querySelector(".discord-online-users");
const minecraftOnlinePlayers = document.querySelector(".minecraft-online-players");
/*Config contact*/
const contactForm = document.querySelector(".contact-form");
const inputWithLocationAfterSubmit = document.querySelector(".location-after-submit");

const getDiscordOnlineUsers = async () => {
    try {
        const discordServerId = config.serverInfo.discordServerID;

        const apiWidgetUrl = `https://discord.com/api/guilds/${discordServerId}/widget.json`;
        let response = await fetch(apiWidgetUrl);
        let data = await response.json();

        if(!data.presence_count) return "None";
        else return (await data.presence_count);
    } catch (e) {
        return "None";
    }
}

const getMinecraftOnlinePlayer = async () => {
    try {
        const serverIp = config.serverInfo.serverIp;

        const apiUrl = `https://api.mcsrvstat.us/2/${serverIp}`;
        let response = await fetch(apiUrl);
        let data = await response.json();

        return data.players.online;
    } catch (e) {
        console.log(e);
        return "None";
    }
}

const getUuidByUsername = async (username) => {
    try {
        const usernameToUuidApi = `https://api.minetools.eu/uuid/${username}`;
        let response = await fetch(usernameToUuidApi);
        let data = await response.json();

        return data.id;
    } catch (e) {
        console.log(e);
        return "None";
    }
}

const getSkinByUuid = async (username) => {
    try {
        const skinByUuidApi = `https://visage.surgeplay.com/${config.userSKinTypeInAdminTeam}/512/${await getUuidByUsername(username)}`;
        let response = await fetch(skinByUuidApi);

        if(response.status === 400) return `https://visage.surgeplay.com/${config.userSKinTypeInAdminTeam}/512/ec561538f3fd461daff5086b22154bce`;
        else return skinByUuidApi;
    } catch (e) {
        console.log(e);
        return "None";
    }
}

/*IP copy only works if you have HTTPS on your website*/
const copyIp = () => {
    const copyIpButton = document.querySelector(".copy-ip");
    const copyIpAlert = document.querySelector(".ip-copied");

    copyIpButton.addEventListener("click", () => {
        try {
            navigator.clipboard.writeText(config.serverInfo.serverIp);
    
            copyIpAlert.classList.add("active");

            setTimeout(() => {
                copyIpAlert.classList.remove("active");
            }, 5000);
        } catch (e) {
            console.log(e);
            copyIpAlert.innerHTML = "An error has occurred!";
            copyIpAlert.classList.add("active");
            copyIpAlert.classList.add("error");

            setTimeout(() => {
                copyIpAlert.classList.remove("active");
                copyIpAlert.classList.remove("error");
            }, 5000);
        }
    })
}

const setDataFromConfigToHtml = async () => {
    /*Set config data to navbar*/
    serverName.innerHTML = config.serverInfo.serverName;
    serverLogo.src = `images/` + config.serverInfo.serverLogoImageFileName;

    /*Set config data to header*/
    serverIp.innerHTML = config.serverInfo.serverIp;

    let locationPathname = location.pathname;

    if(locationPathname == "/" || locationPathname.includes("index")) {
        copyIp();
        /*Set config data to header*/
        serverLogoHeader.src = `images/` + config.serverInfo.serverLogoImageFileName;
        discordOnlineUsers.innerHTML = await getDiscordOnlineUsers();
        minecraftOnlinePlayers.innerHTML = await getMinecraftOnlinePlayer();
    } else if(locationPathname.includes("rules")) {
        copyIp();
    }
    else if(locationPathname.includes("admin-team")) {
        for (let team in config.adminTeamPage) {
            const atContent = document.querySelector(".at-content");
            
            const group = document.createElement("div");
            group.classList.add("group");
            group.classList.add(team);

            const groupSchema = `
                <h2 class="rank-title">${team.charAt(0).toUpperCase() + team.slice(1)}</h2>
                <div class="users">
                </div>
            `;

            group.innerHTML = groupSchema;

            atContent.appendChild(group);

            for (let j = 0; j < config.adminTeamPage[team].length; j++) {
                let user = config.adminTeamPage[team][j];
                const group = document.querySelector("." + team + " .users");

                const userDiv = document.createElement("div");
                userDiv.classList.add("user");

                let userSkin = config.adminTeamPage[team][j].skinUrlOrPathToFile;

                if(userSkin == "") userSkin = await getSkinByUuid(user.inGameName);
                let rankColor = config.atGroupsDefaultColors[team];

                if(user.rankColor != "") {
                    rankColor = user.rankColor;
                }

                const userDivSchema = `
                    <img src="${await (userSkin)}" alt="${user.inGameName}">
                    <h5 class="name">${user.inGameName}</h5>
                    <p class="rank ${team}" style="background: ${rankColor}">${user.rank}</p>  
                `;

                userDiv.innerHTML = userDivSchema;
                group.appendChild(userDiv);
            }
        }
    } else if(locationPathname.includes("contact")) {
        contactForm.action = `https://formsubmit.co/${config.contactPage.email}`;
        discordOnlineUsers.innerHTML = await getDiscordOnlineUsers();
        inputWithLocationAfterSubmit.value = location.href;
    }
}

setDataFromConfigToHtml();
