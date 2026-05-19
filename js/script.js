/*
Configuration
------------------------
If something doesn't work please contact me on discord (Astronawta#0012).
*/

const config = {
    serverInfo: {
        serverLogoImageFileName: "logo.png", /*This is a file name for logo in /images/ (If you upload new logo with other name, you must change this value)*/
        serverName: "Nikashi SMP", /*Server name*/
        serverIp: "nikashi.minecraftindonesial.my.id:21004", /*Server IP (if you want to add online user counter, you must have true the enable-status and enable-query of server.properties)*/
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
                skinUrlOrPathToFile: "https://vzge.me/bust/256/iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAKCElEQVR4AdybfWxdZRnAn/esn9e261jXrSXNuojGfRhWZR/Z1CHqwMXAVDSBSDY1wWg0KpkmJvif8R8xRkmMJhC3aIJ/OBU1JM6YCUICKNYhbAhSmpC5drK2rPZ2/eJwfm/7lLcv7znn3t57N7Zlvz3P+3y97/vcc8499567qLe3N5aMPxs3boyzWF3ojXva+2KVro4to3RZLn8NbjJzumP0kA27TzQ4OGh8YznjQsMqGS4+KyOTg3J28ll5eaxfziU6El85tZYbm8z1pj2EbKH6UchYjq04PSozMzNJCmsw0tDQIJIcU8YYwZc4Kvqrr7xfJM3ux+WNo7wA1z82NiaTk5OuSXiV6+vrpb6h3tqNMbYJ2PBZY5X+Cc1faemonAKNjY3BcGOMDB+9X4aO3mcZ/vX9YgxHRDB82ca0+d2C55/4Y+zi+kJ6WQ1obm4WcAudPn/CbnrFmk5xoRn/HX+aRsTGmEXc3HJ15oasvJU7bxKXrFh8ZTWABJ9zvztiN25aCuJCM1558LB8/YZHZOPaj1jQ/fxqj+M4Ni559StuQN4E++/qlDWday3oefG+/9SpU6nnUpbPr5M2jvRqmiZJ1IsPF0AFG75d3/iu7Dj4Ndl+651LwIbvC4f2y9mZv1vQ/XmoAb6dMfZSINbHz0vzLzkC2BwbGxgYEJeRkRE5c+bMErC5MejkUsOfPG/M4ojhFaUGErADNYeGzsjQ0JCFtWDDB8SC5lILOxI6OjqSN2a0N1BbxMIVCrOxQqEgbW1tgiwUmhdkwcrmxDdvnx+jt7a2Wh+51NB6pcjkyh4TNzw8bFeX5C8e8mwK5sZWSTTVLnOTb7wLjZ8VwQc2MflHc6lFTWrD+Pj4khcUHzZ8kbsBNs1mkouIwNTUlExPz8jU9HQip6Wurk5McpczvTBWmVzlk5ufWFqTplGDmkiu2OjYkdha2+abhY4N2hJb0rzFjSd7sX97kltsaKx7mx13tlwjLXGvrJhut/cfbU3rYrBO5x9qufWZnxcu2Y8B1sU+mTvqatxmU1WKMfN3dok0JtluHMtksSgTExN2kyLJHd7CmCbJwp+ppFELqlALX3fTdqsn3bQSG7vErzb0ZApNXSLZODTUFeRccdAgGaMjVzZ1CSxJWhgwF7WBOaeTF3PBZfdnjLFriqZnizI3OyfI2dlZmU1ua1WSYIyxb2Wb1u2V5w//QAZ+/iP7lnbXh/4qxsw3iPi5udmkzoygU2tubr6mqzOP+meSufABsczlw4bh5NAx9iBIxsT955VHTWvTGgHGPjoP9dGLxaKtQVzyYhps+KKp2QlZXbdZrFyxWTrqttgbm5d+ca+sb91t4e2Lt7IVCzc76Njw97a9zzaFG5/VK7bI6qSG1kLCoi2ZhxhszIOE0dHRxcWxQIUNg46R7hgdsPuMjY0ZakOoPjZ8ER9YUFSid9xy0NZ77L47BLZ2DMofHrhz8UYHHRs+ILjj5gO2ieRrLSS4NlfH9/JYf3Dz1KwUagPXEa2lEhu+iPMJReVs85D09PRI35e/bam/4VMSvXuPmA3b5HzHZmnd/H4DbTtuNKs+dscic6+9ZqjTvD6Sa3Ztku7ruqSnr9eCjg3ftu3N0rm+WVq6LljJ25Xyib27Yl1gmuT7C6Wrqyse/edxy9BffhVDKI91+Xa1Rb6jmuPG5oJANWtWu1ZqAz55407Zt6evovkevPtzAhUVqXFyagOqMW9j+2qBUK19H7hWXEIxF8MWcR65+JN+84u3CWzZ9C7ZveM9oucfkrx3XvveeOvu6y3ofr4/fmZ4ShqvWit/fmZIfv/4C5ZHXzwvbVdvkIGJBqHWjg/vi4F6zOPi19v00dsF+m77igBryor386PPf3qv+Hzmlj1+nHA6KJwexJBXaGmV4YF/W9Bh9H/DAjcd+p4AOuCDtHiuF0AsEPumhVTZUPEpMHZ6UBqTb4oAHXThbAJYMzZ8QCygAz5iiAV0bPi4bU2DGiHceGplUXEDQsV5FdnA8WN/EkDHForFNjUynNzfFy3Tr56zEhu+WlOTBvAqsuHuzlUC6NiWuxk++sJy87PyatKArAnL9bHx5BOcALoLthBuTN58b7kGcP66i2bc3t4u7QnoLqHzH5sb49YK6cEGTF6YEggllGLjnOeQn5icEkDHVkruxY4JNuChR07I8SefS10LzYG0AC5gbPjV8aIAOra0+Etpj44ee1J8Tp48KfDQw/0SgubQJPLSFs97PTdOgJ4Wd6ntwSOgu7tboJLF3X7znsWbJ/Tl1nIvaL4eugBic+Py5o3+9lS/+Lzw4ksCjz3xDwnhxmdN0NzUKJAVk+fr/+3PxOfxw/cI9D9wr4TAB+Tl1Y9aCk0mjavXXmVgZWtBAB3ceB6v+/BN7fd/+kvjgs2P0zG+EPhXbf2g8Vl3/a2mFMjLbUBewP+LFxa/pDg9PLKo5+VdLv7gNeByWXw11pnbAA53nYjDX/UrReY2gI3SBEC/0iipAeVumi8yQPPQQce+xAdqRwcd11JGd3/1QJxG2sRufCjm+RNP2a+62QQQozZ0H/URC/jVhl5LanIEsGA24IItC43l+wD0rNhq+qLv/PCISSNtIjc+FKOvIr7kGZ1963Rt2N8q1OQU0M3p5nVciuTmp5S4asXU7BRwX3FXL3fh+tQoJNNqubFpMWqvySmg57BJ/vB9AJOpDb0cQrfIakuro35kWozag0eAdlCDypXk64a5f0DHVm4d4slLA38INz7kd23BH0nROXAfMLh6qRM8/a/nYnAnXI6uH2+Xk5uXE7FRHz4AARekEG581gQ/uedbAlkxeT7m0jWgu6TllhKjufYUYLOgRl/yKRDUTizo2JcsANuPj/zGALra0GtJubVtAzhPQZPRQcd8FwA6xgc6dqV7qvCcjsbRLMWNDenkuDV45g/6O4BQTiU224CsAmxA/WxC9StF5jag3I3yAJWHp+XmXar43Aa43wGkHfaXavHVmDe3AUzCxgHdR8/XLx34eAy+/7qtm+Udb9+wiH+OM3bx83cePCTQt/+zAjofkjw/vtxxVG6CH88hD75dfz/Abwh88HGahPL8OrUeBxvgft7P0quxOJ7l+bjP9rJ08ipdQ7ABlRa9nPKDDXA/72fpF2ujNb0VDm0i67B3faHccm08yvLRDatUv45VYi93Pj8+eAT4QbUccx77+Oc9vw0A305eaG3uh7UsndxgA7IOe9dHgRA8OoeQ72LY+NxRCqwl2ADtGgHLQR+fp+XSHEjzV2rX9edJ5rH/eZqbChftXl4BckK/H+C3BcDvB0Lw2wLbpIf7WUPN0WtGaCL7n6f187ZKPvSANiJNEh8qym8LIOTzbVzIfHTBeZI8vx5jf72sE3w7sfYU4BMfYAhBM0B96MA49PsBflsA7u8IQjq5ec/3ecbvw7N/IJc1VMLrAAAA//+ePR//AAAABklEQVQDAMPWCxysa+aAAAAAAElFTkSuQmCC",
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
                skinUrlOrPathToFile: "https://vzge.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",                
                rankColor: "rgba(6, 152, 255, 1)"
            },
            {
                inGameName: "FathirARG",
                rank: "Pengatur",
                skinUrlOrPathToFile: "https://vzge.me/bust/256/iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAGFBMVEUAAAA9Ak89Ak/Cqg/hAP+PANI9Ak8hAil6QL0AAAAAA3RSTlMAAQWTBwEQAAAAcklEQVR42mMAgVAoYMAChr8ChGRqaGgYsiJmZgMDFAVpQIRQwGxsbOJsbGyAZjxCAVSGGYcCrG4oDQ0Nx60ArAIoj1dBeTkeBWgAR0jAaGQ2/RSE4gGjCuinYBRQBJiGhS8E8RWnCJr+CjAT76gCuisAAAchEd3unDQSAAAAAElFTkSuQmCC",
                rankColor: "rgba(6, 152, 255, 1)"
            },
            {
                inGameName: "chrisAntera",
                rank: "Pengatur",
                skinUrlOrPathToFile: "https://vzge.me/bust/256/iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAFU0lEQVR42u2aTWxVRRTH38qNu6ohsFAgEQVEBZo0MQQXuDACKpsWTBUVtAoSaDBRE4MrAg0LojEsiCbqooJRY0lbpAXSglEXtIgJUINI0xg/MIQohA9NM9z/PP6X845zP957fX23r/OSf2Z67tzpPb/5uHPnTC6X8Lun6StTjnIV/I2OjibKGBOrnAdQJoD6Vw/HygOodQDN7w7GqmYAzH3xa+PKTxoALucn1SQIx+vXH7QqBkLmASQ5cPtjn1it3nnCvP7hT1bI017N1+S4AQgqso7v+HLECnnYahrA4s1HrNjqcPyj/vNWOztGQjvLFeO0HEK5Cv9SAZAO0CFo0+6h0FGIAKQNZSANgnmsBaTTMq30OiEVAD6odFqK3T3XYEIAyHNY6PIShO4ZGkJmegAfFg70nLgQOoOu/sSW7/MApn13C0CQhw3XUIblea9rSEStI6oOQD6MdOT4z3/bFE5u/mAo73hQH4Q8bLgGsazuAa5ur22ZABAHgc5DbV8Mh3lCOPfnFWfLs16X87JMmpm8HBW9EJq7vttIoatLJRHnYilKi1qPxCqpfqxBpJKezwMoFkBT26Cd2M5fvGpVLADZxVmHtG3YfcoOGV6jYIcmPAC29MhfV8zZ3/NCnnYNoHfgD5vCVhUAmIgwebFCzOquFnqv+1fz5sdnCia3m5NYgbgR0j44ak6fu2yFPO2y7LXr/9k6Fjo2Uua35D+6tMN881B6yKLxKJQfMwBw3gXA9b5HPX2nLpqh4UtWyMOmy89ctc/aFgTOwukFLYfMA2sO2PyDa3tSAVjy1jcF0uVLBqAhwPkVW4/9D4BeAuO+H87+Y+8hAORhwzW58GrYcNjMCxy2jgd1zWruMFNXfGavz1t7IDUAXhszAEhdvQAAUFY6z/sIgvAIQToPsRzuadw2YJ2/t7nT1C371Px48x7kZz+/3wnAJcxbkOtaSQCiIACAdJZ53UK6B/Fv1kuhpee/fNC2/q6u4YL/NX1lfjjROSnpdJJSfQy5AOi5AJMge4BsdTjh6qK4l0OAzrsAsPXf7/zFlmt8p8/+fd9zXRYA55444dk4SWulAsAH4scPFiRMUbEEIB2QAPgxJb8PCA952rlkxj0zVnaY+1d3mzuW7zGr2gas7e7Gz82sZ7vCYcbeg7eGzON5kKfzlC6bCMDVbS5d/TfMy8oBALaWXSfD6/JLUgJg61MSACHMfGafbem7ntprmrYfs9fvfHJPYOu2YAiADrlSwtCvY6okAGeCxcvpkcsFziJ1Se8jJA0BCeCRjX12CKAHLN9yNCyDIRC1zihWiQDYVUqV3kGCA+yKchKETQ4BpIta+83DL/WaKU/vNfWvdJolb/Sbx9/+dnwBRHWrqLz+W+8iJb0FWM5ul607ZB4KAMx5Yb+pW9puHm3tMQ2v9QY9YpwBqLV0QZok1xzgWkNoALhnejAJykVV3bL2gtaPAhD3jL9duFYcgGr+XA8UALAKnIduQ1rRHaEsAYi6VrMA0j74pAQwbpuiHoAH4AF4AB6AB+ABeAAegAfgAXgAY/ErN7xebPDTA8gaAG6BIcaA3WQPoNYBMDQVtQkqo0g6smylhoyO/roCnvIMQCYAQKUC0PH9NACkqg4A4TINwBUNjgMg4/sTEoCr9eVZAwnAdb4gLr4/4QBI510A9PmCqLh+2jMAmQAgJ0EZCNUA9FkE5JPi+0nKFACk8mwBD1NrCLILu+L7DHe7zgZoW2YAUGmPrjDs7orxpzkTkHZdUHEAPCegD07EOS5VbvS36gDKPV8w4QEknSeI6r5j4XymAJRzxqDUe3EWoFwANwBCnw0PAafWKAAAAABJRU5ErkJggg==",     
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
