"use strict";(self.webpackChunkvrctxl=self.webpackChunkvrctxl||[]).push([[9139],{1974:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var i=t(5893),n=t(1151);const l={sidebar_position:3},a="Dynamic Whitelist",r={id:"access-txl/whitelist-sources/dynamic-whitelist",title:"Dynamic Whitelist",description:"Dynamic whitelists allow players to be added to the whitelist at runtime, and the list will be persisted and synced, such that players",source:"@site/docs/access-txl/whitelist-sources/dynamic-whitelist.md",sourceDirName:"access-txl/whitelist-sources",slug:"/access-txl/whitelist-sources/dynamic-whitelist",permalink:"/Docs/docs/access-txl/whitelist-sources/dynamic-whitelist",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docs",previous:{title:"Remote Whitelist",permalink:"/Docs/docs/access-txl/whitelist-sources/remote-whitelist"},next:{title:"Custom Whitelist",permalink:"/Docs/docs/access-txl/whitelist-sources/custom-whitelist"}},o={},c=[{value:"Usage",id:"usage",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Dynamic User List",id:"dynamic-user-list",level:3},{value:"User List",id:"user-list",level:4},{value:"Synced Player List",id:"synced-player-list",level:4},{value:"Sync Player List",id:"sync-player-list",level:3},{value:"Max Player Count",id:"max-player-count",level:4},{value:"Remove Players On Leave",id:"remove-players-on-leave",level:4},{value:"Access Control",id:"access-control",level:4},{value:"Allow Ownership Transfer",id:"allow-ownership-transfer",level:4},{value:"Public API",id:"public-api",level:2},{value:"Network Sync",id:"network-sync",level:3},{value:"Inherited API",id:"inherited-api",level:3},{value:"Methods",id:"methods",level:3}];function h(e){const s={a:"a",blockquote:"blockquote",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",ul:"ul",...(0,n.a)(),...e.components},{ApiMethod:l}=s;return l||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ApiMethod",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"dynamic-whitelist",children:"Dynamic Whitelist"}),"\n",(0,i.jsx)(s.p,{children:"Dynamic whitelists allow players to be added to the whitelist at runtime, and the list will be persisted and synced, such that players\nwill still retain access even if they leave the instance and rejoin.  The package comes with two controls for adding players, although\nit's possible to write your own controls to manage a dynamic whitelist as well."}),"\n",(0,i.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(s.p,{children:"The dynamic whitelist prefab is mainly a wrapper around the CommonTXL SyncPlayerList -- the component that's keeping a list of names\nsynced across all users in the instance.  As such, there isn't much to configure on the Dynamic Whitelist itself, and there's a few\nkey settings on the SyncPlayerList that will influence its behavior."}),"\n",(0,i.jsx)(s.p,{children:"This whitelist is intended to be managed by other systems in your world.  AccessTXL ships with two such prefabs:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/Docs/docs/access-txl/access-prefabs/access-grant-controller",children:"Access Grant Controller"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/Docs/docs/access-txl/access-prefabs/access-keypad-controller",children:"Access Keypad Controller"})}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:'Check each prefab for more information on how and when to use them.  In short, the Access Grant control provides a way for existing\n"admin" players in the world to securely grant "admin" access to other players in the world, which will persist for the lifetime of\nthe instance.  The Access Keypad Controller provides a more familiar 10-digit keypad for granting self-access with a passcode, but\nthe system is less secure than access grant.'}),"\n",(0,i.jsx)(s.p,{children:"It's also possible to write your own systems that keep the dynamic whitelist updated.  Check what's available in the public API."}),"\n",(0,i.jsx)(s.h2,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Dynamic whitelist inspector window",src:t(7279).Z+"",width:"516",height:"626"})}),"\n",(0,i.jsx)(s.h3,{id:"dynamic-user-list",children:"Dynamic User List"}),"\n",(0,i.jsx)(s.h4,{id:"user-list",children:"User List"}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:["A default list of display names to sync across the network.  It's generally better to use other whitelists like the ",(0,i.jsx)(s.a,{href:"/Docs/docs/access-txl/whitelist-sources/static-whitelist",children:"Static Whitelist"}),"\nfor giving access to a default set of users, but there may be niche uses.  A custom component would be able to remove some of these\nnames later during runtime."]}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"synced-player-list",children:"Synced Player List"}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsx)(s.p,{children:"A reference to the underlying SyncPlayerList.  The prefab includes both components on the same object, so this will be auto-filled."}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"sync-player-list",children:"Sync Player List"}),"\n",(0,i.jsx)(s.p,{children:"Check documentation for Sync Player List for a more expansive overview of the options.  However, here are a few key options that are most\nrelevant to the dynamic whitelist."}),"\n",(0,i.jsx)(s.h4,{id:"max-player-count",children:"Max Player Count"}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsx)(s.p,{children:"The max number of players that can be synced in the list.  The default value of 100 should be way more than needed in most cases, but\nby default players are also persistent even after they leave the instance, so it is possible to continue adding players and exceed\nthe world cap."}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"remove-players-on-leave",children:"Remove Players On Leave"}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsx)(s.p,{children:"When selected, a player will be removed from the list when the leave the instance.  When they rejoin, they'll need to be re-added by\nthe same mechanisms that got them added in the first place."}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"access-control",children:"Access Control"}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:["Important for the ",(0,i.jsx)(s.a,{href:"/Docs/docs/access-txl/access-prefabs/access-grant-controller",children:"Access Grant"})," prefab.  This is the Access Control object that determines\nif a player in the world has the authority to add someone to the whitelist.  It may the same Access Control that the dynamic whitelist\nis also a part of (e.g., admin adds another player to the admin list).  It can also be different (e.g., admin adds another player to a DJ access list)."]}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"allow-ownership-transfer",children:"Allow Ownership Transfer"}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsx)(s.p,{children:"This should normally be enabled, and needs to be enabled for both of the access prefabs.  When disabled, an external script needs to\ncontrol ownership of this list in order to make changes to it."}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"public-api",children:"Public API"}),"\n",(0,i.jsx)(s.h3,{id:"network-sync",children:"Network Sync"}),"\n",(0,i.jsx)(s.p,{children:"The Sync Player List component on this object is network synced."}),"\n",(0,i.jsx)(s.h3,{id:"inherited-api",children:"Inherited API"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"EventBase Public API"}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/Docs/docs/access-txl/whitelist-sources/custom-whitelist#public-api",children:"AccessControlUserSource Public API"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/Docs/docs/access-txl/whitelist-sources/static-whitelist#public-api",children:"AccessControlUserList Public API"})}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"methods",children:"Methods"}),"\n",(0,i.jsx)(s.h4,{id:"",children:(0,i.jsx)(l,{return:"bool",method:"_AddPlayer",params:["VRCPlayerApi","player"]})}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsx)(s.p,{children:"Adds the given player to the synced list.  Returns true if the player was added or already existed in the list.  Returns false if\nthe player could not otherwise be added, e.g. if the list is at capacity or the access check failed."}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"-1",children:(0,i.jsx)(l,{return:"bool",method:"_RemovePlayer",params:["VRCPlayerApi","player"]})}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsx)(s.p,{children:"Removes the given player from the synced list.  Returns true if the player was removed from the list.  Returns false if the player\nwas already missing from the list, or if the remove failed, e.g. because the access check failed."}),"\n"]})]})}function d(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},7279:(e,s,t)=>{t.d(s,{Z:()=>i});const i=t.p+"assets/images/access-dynamic-whitelist-prefab-6ef76d2910bb898e47f36b2e0fc5d07c.png"},1151:(e,s,t)=>{t.d(s,{Z:()=>r,a:()=>a});var i=t(7294);const n={},l=i.createContext(n);function a(e){const s=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),i.createElement(l.Provider,{value:s},e.children)}}}]);