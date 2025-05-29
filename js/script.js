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
                rank: "Wakil Pemilik Server",
                skinUrlOrPathToFile: "https://vzge.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",
                rankColor: "rgba(239, 47, 47, 1)"
            },
            {
                inGameName: "STLa",
                rank: "Developer",
                skinUrlOrPathToFile: "https://vzge.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",
                rankColor: "rgba(239, 47, 47, 1)"
            },
        ],
        moderator: [
            {
                inGameName: "Vyxzernova",
                rank: "Pengatur",
                skinUrlOrPathToFile: "https://vzge.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",
                rankColor: "rgba(6, 152, 255, 1)"
            },
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
                inGameName: "MilkyChiko",
                rank: "Brigadir",
                skinUrlOrPathToFile: "https://vzge.me/bust/iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAozSURBVHic7Vp/bBxHFf6uPc5uLndZ2/gUOzWmbGoRpGAZ07MMcYISy0qpA1FALikJrhIoCSFthVpaQgOCAKJI0AaoaIsaJYogxRKRW0wrrARIE5p6W+OWVkkUclhH2rvgaO29O1Z3ucoZ/jjPenZ29tfduZCKTzrdzrz3Zmfevnnz5s0E4ILHv/9LAgCxpiWm+ql0pvRACBAIAADC4RAAQNeLBm3HQ3cF3N7hhMOPHiIAsPXewYCXer8IViJsgJC5f658DcBVe0cPDBmj0bN5hKM3mOhTKc14jjVLlrpKLWCh4ckC9Eweun6lVCBAeMm8EsLhGlMZmFeEnslXqZsLh+vcGHo70xh7+SXcsSGPN85MYOzll9DbmcYfj/0JvZ1pAMDKW+LCXzVwJVmyQPpvV1cuPE8B1grYrz6V0rDu031C2ePPjL47pgAANLXGkE5OWcwdABZFQojWRUx12Zlc5b17B+CqgKmUBr1QAHCpVKFmDFq4ttZYAoVwoi0wDj96iHhZIgP8Ot/bmcax8SYA8968pAArwrW1AOadnkk2nTHx2sURNHagnb2SHCI1rQNlaY6VpXEChV0cYbEAec23jed99/3I04u//LW7jOcnfvKkjy7DsqzG134DANAuy+S1RMKTIigvlRW1a/feIPtlolIEiRPfsViAG+igezvTUBIRZLWc5YvT9gGY6Ju2uX/tY0efJ1ktZ8hT9G661VbWrV1KNyxAz+YRlSLY8/A5dN0imZzdJ26d9/LRaK3xfPyZUeNZz+Sx5+Fz2PjZNmHApGfzaFnWjIyeE9IpUqpq+uf7tyQcQTSyGNncv11lvCBw7OjzBAAunH0TnR9dgYyew4UzF7H8Qy04fOiIp0a2Dm42ZJaEIxh/5SyWr7jRxHPh7JtYvuJGC93pK7JR6KZtA4GjB4YI/Wf5vFiRHYJZbW65IgQZfX7pMurn8LPvdmL3t8YtzzxvRs8BhFjkTXRGhg5GNAg9mxeWN20bCPBOjoebkig9qGfzxiaG7bSeySMSDhvlGqnJKLPPlFckz4dZJnrWPUzmPTdb3nrvoKMS3Nqn9MDj33vSaCQcrikRadw/t45v+PxtwkDnd7/6fakwt/uzyDNtlOjcdhnAjm9+qSzz9brOu8HSQEFVyd577sHo6dMArI7lsqY5vrQlFiMvjIygSZZN9elEAqv7+5FMp9HR1oYxRUFIKsUPRU1DVzyOifPncd311zu2X1BVQtsDgEupFACge+PGspRhGwlO53Koj5S+eqFY+mK1oZDnhgdu324q7//BHlOZDsAvQpKEolZanptkGU2yXHZbQLUSIjb48SOPYlEkhJ1f/MqCtJ9OJAwLKBe2CqBfHwCkxYsBzFuCFyQnX8fadXFLWxRNsmyaAl7B8lbFAuicskNzQwNfJgDQ192Nffv34+YVK3y9sLWpFGWyci+MjGBMUVDUNNMcX93fj7+fPWurKHbgk4pCABi+p7ahwZNPCLTEYoSf49SJ0RfzKGqa0cH6SAT/SJcSIx+YG1zrTStRF44CAGb0LOrCUczoWSQnXwcAW/5oOIyJxBnIS1sN/jFFsbyf9QN/PXUKAPCRVatMNK8KCK7tXm90koIOjGI6V1q/+bq13evx6ht/sTRKB0PmFBCdixmSNp0Y+s1TuG/3QyAA6iN1iITDeOLAI+iKx4UW9rm+Puzbv1/Y1gODg3h6dFRIEyGw+46dJKvrRidZJKfSQqHWWJPx/PRzRyyrxMVEAiFJwt1bv4p/TqUx/IffoqhpaJkzT56/uaEBE+fPm97R0daGlKri9k9uRk7XTYHXybFR46PwqI9E0NPVh5//+hflTwHeaYksgK0XdQKAMaiOtjZP/Dymczl0fPhjmM7NoD5Sx9FmbNoq8T17bNibAqjzYEEdCR9sLG1uttDjfdZ8IHWcvOLsdmu1oZBQuYViES+efBXZbMG0CwWAbFacpKF8N698vzcfwEdsAAznx9NomaXf2d9vkT84MmIaFB2MiJfys4EXy7/0fQ1YNJMzheLZmZytAkT5SScEgfkvLVKGG0QORxkdtQ2FRXDk37XTwk/DdEA8Pfu6uz33PyCKA/h1d+LkSQBAR0+Phd4iUJpdyGwXSDnxX7QJcuyCH79xQFDUEO8D+JeydFEHu+JxDB85gtbOTgBAcnwcGzdvFq7p5fBXE8F4X5/lC7BzkQW/WhSKRfzLxrGxJs37Dj/8yfFxC69T/H8plTKctRcEAatp0oHbmayfPUE1QON9qhg2/qcDpv/l+DETCqpK7t+yhbTLMmmXZeMMblXXmqqceV+dnSXtskwKqkquzs6Sq7OzpKCqpF2WydXZWc/vEC3f5cBTPqDcgwonVLKDqyZcT4ff7fCUD1jVtYYcH9pVVUsoNx9QbQjjADYnaAeaD7Bbb9mjLT/HXF5h5wNuisd9vceyGSoUi0Zk5iUfcHFqSvjCRkkiOz6zA68lz+H0K392Tab6wdXZWeKUD3BLrLII0gG0xGKEPq/u7yde8gF2g6fY99QPA0BJGXY87bJMxhTFYkkFVSVd8ThElvPA4KBjPqAstMRiVVlWGiXJWOJoHV3qRIpolCRjCWR/7bIs5AdKSmuJxYQ/unR7RcX5AN4KGiWJ0O0wnw9IqaplKrTEYsQpH3Dnhm3Q8hlIN5hPm6l18di7/UHiROdRcT6AdzqsAkT5AF4BjZJEnPIB1fQd/4cAgb3bHyQiEwPczcyJ51pBxZ0XOapq5gP+56dAQVUJ/2uXZTKpKIZHn1QUYwPkl/+/Mii33R9L55cvt92eX/6FHqtwM7Ru4DEcH9plK+RGv6ZB8wD3b9limKCffAAv3yhJpp+b/KSiGFPj9PAwOT08TPzs/f3mCYS7QT4V5ncX6JZK84KQJFUnw+OCBb0fUCkupVK+c3x+IfQBfFS2qmsN8XM1nZeXFi827hh4RVHTsLS5GR09PQtqBUG3zQP1A4R59pIvoBCkzU13kIaP2N9FZLfk7JLIhuDl5AYnFYVQ+YBoqaH7fZoyr+T+AGD1Aax8UdNsz/hF4M//C6pK/OQEaC6Bygc72tps9/s0CmNzBYD3fMHa7vVGmb2DwN4/EB1+OJ3xO90NYOUvP/d148O+fXkG72msM2isvCfvziuAxad6N1osiL0/QCG6g5CcSmPiby9aeOsjEZw8erdRvvLWW6hZtgwA0LPpp6ZtuCiP4Uc+0C7LxO38v9L7A07ykfea7xSX6Na7AGzddG4Gp8ZOVGWPEJhUFOK03xfBT77ATX767aiFLroLwNZlswV0fvyDVVFA0G8WlQfrnUX3B0Rg6dPnLlvo/Bk/ez/A6W5AORAGQux+n8JPWoqH0/2DbV+4zdcZv9fl1ysqNqOCqhKn+wMisHSn43k7iFJx5aLiUJgdgOj+gAhu9HcSQgVcSQ6RdQOP2Xpall7p/YJnDx60tO8U/1d6N5iHUAF0v1/TekIoxNMrvV/Anu8D5ilA7wXQ/0rvBvP4D0qa9q9/rdXEAAAAAElFTkSuQmCC",
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
