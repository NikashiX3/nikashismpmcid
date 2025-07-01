/*
Configuration
------------------------
If something doesn't work please contact me on discord (Astronawta#0012).
*/

const config = {
    serverInfo: {
        serverLogoImageFileName: "logo.png", /*This is a file name for logo in /images/ (If you upload new logo with other name, you must change this value)*/
        serverName: "Nikashi SMP", /*Server name*/
        serverIp: "slime.skyes.id:7026", /*Server IP (if you want to add online user counter, you must have true the enable-status and enable-query of server.properties)*/
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
            {
                inGameName: "pcpoteto",
                rank: "Developer",
                skinUrlOrPathToFile: "https://vzge.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",
                rankColor: "rgba(239, 47, 47, 1)"
            },
        ],
        moderator: [
            {
                inGameName: "CraneCrane",
                rank: "Pengatur",
                skinUrlOrPathToFile: "https://vzge.me/bust/iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAAXNSR0IArs4c6QAAAHVQTFRFAQEB//+78+739e613tjs+tZyysnW4bxsq6a6qpvA0YBYg3ycvmYmnFo/a2CQaV2DkEMkVkxxVExxkzYoUUpqUEhrRTpmZS0sODNRLypLKyZGIh06GxkxGBQrEw8kEg4jEAwfDgwfCwkYCgkXBwURBAMNAAAA2OIqqwAAAAF0Uk5TAEDm2GYAAAO7SURBVHjazZbtdqMgEIZnE6Owrm5D2wgR09iq93+JOx/M8ajJSXvaH/uEkBmBlxF0AijOOWOwKl2JuBJWYINUOSA5KFsB4b6AcFdAFdyXBeJHNAarexFEiFLdw5zOxpxPpixrZCsApzPA+QR3MQlXW6R28FWeni5cSpshdhPB7wMcsPx+KGAzxsKKwy/4heUAhuNdrH405glhAcSY6BhjHBNpfhWgGLhdd8Xh0p8/LpfL5JAJDXSjUQF+orAdAAtX2I5GWRpsoQq7xdPHGXeeKcvzxymahQC1yyoDQu0kkKNnchTIS2PKk3Mj49yJ/JyG5jmqGtlDY3L0IUcTCPQBQRVnqCPO9fz8/v787NTXCHLpzwNQQMJAM5cIcsBeVJx7/3O5/Hl3TnwazF8eTSEDQr/ki4R86fXDMo6Xw253uIyj+M6l3/y2gNwOVaV0tLr/Vvxy/Vqv93/xWvcxxn4YJkgMw9D3WMUEJPCarWvYshUorC1uCmT2tkC/FGhIoBlQdhvBZwR8U8RYNB4FHkfQIySQoFv3KuDR0fXoiSHRw8xABL3dQN7x+Hc/Tfu/x6MMjxGHSnPPhAgzlrgOQbhanudYDUN1lGlTZIKGBDMZ0dqasW02EDxh6h0DadyLQAUyy6Ahg3xE2OStCFFCjKq5vgWvEXgrU/QBSdOhgyKW0G4WZjzx4lvGt14G+SQwr0HG1EyWrQW8CnivaxDnPevJzojdDYEXoWXQuF6vKPT66l/bK4MO6l8zxjILgVZ4Y9CYI+g1ALZ3TM3sdjDTEftQVX1fVaHoekJ2bbEGXVF0XTGOTTOORbd+lIuuaaapabpK+8c1NrPbRZyJEW4RGXiACnyPnxXwEpKHCBH5nIAg41UAPk1YGJQPACgfqLjWQXttCQIIRxgGrD5PuzHmW48Bv1gIjSDCA9azByxEnDWX+JURuH+y0dnsxDYf6HgxwnEWiAz8DDvY8iIAowbmA3iFBOWDn5icUXubD4AJ8qYvHuHIgOQDYLDXCr3SVXBH4GsvM2WUif8BBTTr2n5TwGb/bQSRWXiLjDww+t/8KCEElQgDE5JSSFf7ZXexmdkTrpa5hlAR+6KY8FNUIKi/TAjyo+cEPTc0RFX1+KmqBgT14QZ6TtBzQzoQMHEAQf1NQvAagbfLc0OihjtgQmBQoSXUb31bE1mihseIgJIEdiuB3TYpKCIw+62sScLCY9I5QXmTCBIagfqghH3HFAH4nDD7VToQpOMBCOqDombVgZwTip6pukYX0Wb25iL+A1Rhp461V3hvAAAAAElFTkSuQmCC",
                rankColor: "rgba(6, 152, 255, 1)"
            },
        ],
        penjaga: [
            {
                inGameName: "Zhee",
                rank: "Panglima",
                skinUrlOrPathToFile: "https://vzge.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",
                rankColor: "rgba(0, 198, 255, 1)"
            },
            {
                inGameName: "CraneCrane",
                rank: "Jenderal",
                skinUrlOrPathToFile: "https://vzge.me/bust/iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAAXNSR0IArs4c6QAAAHVQTFRFAQEB//+78+739e613tjs+tZyysnW4bxsq6a6qpvA0YBYg3ycvmYmnFo/a2CQaV2DkEMkVkxxVExxkzYoUUpqUEhrRTpmZS0sODNRLypLKyZGIh06GxkxGBQrEw8kEg4jEAwfDgwfCwkYCgkXBwURBAMNAAAA2OIqqwAAAAF0Uk5TAEDm2GYAAAO7SURBVHjazZbtdqMgEIZnE6Owrm5D2wgR09iq93+JOx/M8ajJSXvaH/uEkBmBlxF0AijOOWOwKl2JuBJWYINUOSA5KFsB4b6AcFdAFdyXBeJHNAarexFEiFLdw5zOxpxPpixrZCsApzPA+QR3MQlXW6R28FWeni5cSpshdhPB7wMcsPx+KGAzxsKKwy/4heUAhuNdrH405glhAcSY6BhjHBNpfhWgGLhdd8Xh0p8/LpfL5JAJDXSjUQF+orAdAAtX2I5GWRpsoQq7xdPHGXeeKcvzxymahQC1yyoDQu0kkKNnchTIS2PKk3Mj49yJ/JyG5jmqGtlDY3L0IUcTCPQBQRVnqCPO9fz8/v787NTXCHLpzwNQQMJAM5cIcsBeVJx7/3O5/Hl3TnwazF8eTSEDQr/ki4R86fXDMo6Xw253uIyj+M6l3/y2gNwOVaV0tLr/Vvxy/Vqv93/xWvcxxn4YJkgMw9D3WMUEJPCarWvYshUorC1uCmT2tkC/FGhIoBlQdhvBZwR8U8RYNB4FHkfQIySQoFv3KuDR0fXoiSHRw8xABL3dQN7x+Hc/Tfu/x6MMjxGHSnPPhAgzlrgOQbhanudYDUN1lGlTZIKGBDMZ0dqasW02EDxh6h0DadyLQAUyy6Ahg3xE2OStCFFCjKq5vgWvEXgrU/QBSdOhgyKW0G4WZjzx4lvGt14G+SQwr0HG1EyWrQW8CnivaxDnPevJzojdDYEXoWXQuF6vKPT66l/bK4MO6l8zxjILgVZ4Y9CYI+g1ALZ3TM3sdjDTEftQVX1fVaHoekJ2bbEGXVF0XTGOTTOORbd+lIuuaaapabpK+8c1NrPbRZyJEW4RGXiACnyPnxXwEpKHCBH5nIAg41UAPk1YGJQPACgfqLjWQXttCQIIRxgGrD5PuzHmW48Bv1gIjSDCA9azByxEnDWX+JURuH+y0dnsxDYf6HgxwnEWiAz8DDvY8iIAowbmA3iFBOWDn5icUXubD4AJ8qYvHuHIgOQDYLDXCr3SVXBH4GsvM2WUif8BBTTr2n5TwGb/bQSRWXiLjDww+t/8KCEElQgDE5JSSFf7ZXexmdkTrpa5hlAR+6KY8FNUIKi/TAjyo+cEPTc0RFX1+KmqBgT14QZ6TtBzQzoQMHEAQf1NQvAagbfLc0OihjtgQmBQoSXUb31bE1mihseIgJIEdiuB3TYpKCIw+62sScLCY9I5QXmTCBIagfqghH3HFAH4nDD7VToQpOMBCOqDombVgZwTip6pukYX0Wb25iL+A1Rhp461V3hvAAAAAElFTkSuQmCC",
                rankColor: "rgba(0, 198, 255, 1)"
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
