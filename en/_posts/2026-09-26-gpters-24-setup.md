---
title: Beyond Asking About the Weather — The One Setup Every AI Beginner Needs
section: vibe-coding
sub: gpters24
ref: gpters-24-setup
date: 2026-09-26 21:00:00 +0900
description: Keep everything you do with AI in one folder. Learn the big picture and the reasons — then let the AI handle the installing and the file-making.
---
I've built a ridiculous number of projects with AI. Somewhere along the way I was bouncing between two laptops, a mini PC, and three AIs (Claude, GPT, and Gemini), and everything I'd made ended up scattered all over the place. When I finally sat down to sort it out, it took me **three whole days**.

I'd rather you didn't repeat that. So if all you've asked AI so far is what the weather's like? **Honestly, perfect!** Set things up right from day one and you'll never have to go through what I did.

"Eh, I'm never going to use it *that* much." Careful, AI newbies. Once you get hooked, you might find yourself making a lot more than you expect!

## <span class="no">1</span> One thing to understand first

**AI doesn't remember your conversations.** Every time you send a message, it rereads everything in that chat from the very top and writes its reply from there. But there's a limit to how much it can read at once (the **context window**), and that causes three problems.

<div class="facts">
<div><span class="n">When a chat gets long</span><b>The beginning gets cut</b>It gets dropped or summarized, and the details you set up at the start disappear.</div>
<div><span class="n">Even within the limit</span><b>The middle gets missed</b>Models handle the start and end of long text well but lose track of the middle. Research has shown this too ("Lost in the Middle", 2023).</div>
<div><span class="n">When you open a new chat</span><b>It starts from zero</b>It doesn't read your earlier chats. A different AI certainly doesn't know them either.</div>
</div>

This gets worse as your projects grow to four or five, and as you start switching between Claude and GPT or using both (having one AI check another's work makes the results noticeably better). Something breaks and you have to start with "find the thing we built before." You end up explaining the same thing to every AI, in every new chat.

<div class="keyline">Keep the memory in files in your own folder, not in the chat.<small>Files don't get cut off, can be reread in any new chat, and Claude, GPT, and Gemini can all read them the same way.</small></div>

Collecting your AI work as files like this is what I mean by **knowledge management**.

## <span class="no">2</span> The big picture

You need three tools. The idea is simple: **one folder** in the middle that both you and your AI work out of.

<div class="setup-map">
<div class="node c2"><span class="ic"><svg><use href="#i-obsidian"/></svg></span><b>Obsidian or Notion</b><span>Your notebook for reading and editing the records</span></div>
<div class="arrow">↔</div>
<div class="node c1 hub"><span class="ic"><svg><use href="#i-folder"/></svg></span><b>A "me" folder in OneDrive</b><span>The one place all your work lives.<br>Looks the same on every computer</span></div>
<div class="arrow">↔</div>
<div class="node c3"><span class="ic"><svg><use href="#i-bot"/></svg></span><b>Claude or GPT</b><span>The assistant that reads the folder, does the work, and keeps notes</span></div>
</div>

And the folder comes with five rules. **The heart of this setup isn't the installing — it's these rules.**

<div class="rules">
<div class="rule"><span class="ic"><svg><use href="#i-folder"/></svg></span><div><b>Everything you do with AI goes in the "me" folder</b><span>Unless you tell it otherwise, AI saves files wherever is convenient at the moment — the desktop today, Downloads tomorrow. Pick one place and "where did I put that?" goes away.</span></div></div>
<div class="rule"><span class="ic"><svg><use href="#i-hand"/></svg></span><div><b>Make it easy to open with your own mouse</b><span>A desktop shortcut and names you can recognize at a glance. Otherwise even opening a single file becomes something you have to ask the AI to do.</span></div></div>
<div class="rule"><span class="ic"><svg><use href="#i-note"/></svg></span><div><b>One rules file: AI협업규칙.md</b><span>The file your AI reads before it starts any work. New chat, or even a different AI — "read the rules file first" is all it takes to pick up where you left off.</span></div></div>
<div class="rule"><span class="ic"><svg><use href="#i-log"/></svg></span><div><b>Leave a work log when you finish</b><span>Date, what got done, what's next — short and simple. When something breaks later, you don't dig through old traces; you just have the AI read the log first.</span></div></div>
<div class="rule"><span class="ic"><svg><use href="#i-key"/></svg></span><div><b>Never write down passwords or keys</b><span>This folder syncs to the cloud (OneDrive) and your AI reads it. Keep passwords and API keys somewhere else, and only note <i>where</i> they are.</span></div></div>
</div>

## <span class="no">3</span> The tools you'll need

I'm not going to write out installation steps here. **Just show your AI the links below and say "help me install this."** It'll walk you through it based on what's actually on your screen — more accurate and faster than anything I could write.

<div class="tools">
<div class="tool t-cloud"><div class="h"><svg class="i"><use href="#i-cloud"/></svg>OneDrive</div><p>Microsoft's cloud storage. Any folder you put here looks the same on a new laptop or on your phone. It already comes with Windows.</p><div class="go"><a href="https://www.microsoft.com/microsoft-365/onedrive/download" target="_blank" rel="noopener">Get OneDrive →</a></div></div>
<div class="tool t-ai"><div class="h"><svg class="i"><use href="#i-bot"/></svg>Claude / GPT desktop app</div><p>Opening folders and creating files directly happens in the desktop app. For which plan to pick, see the note in our group chat.</p><div class="go"><a href="https://claude.ai/download" target="_blank" rel="noopener">Get Claude →</a> &nbsp; <a href="https://chatgpt.com/download" target="_blank" rel="noopener">Get GPT →</a></div></div>
<div class="tool t-obs"><span class="tag">Recommended</span><div class="h"><svg class="i"><use href="#i-obsidian"/></svg>Obsidian</div><p>A free note-taking app. It opens your "me" folder <b>as it is</b> and shows it like a notebook. Notes are plain text files (.md), so your AI can read and edit them directly.</p><div class="go"><a href="https://obsidian.md/download" target="_blank" rel="noopener">Get Obsidian →</a></div></div>
<div class="tool t-notion"><div class="h"><svg class="i"><use href="#i-notion"/></svg>Notion</div><p>Already using it? Keep going. Just know that Notion can't open your "me" folder directly, so your AI needs permission to connect to Notion before it can read your notes.</p><div class="go"><a href="https://www.notion.com/desktop" target="_blank" rel="noopener">Get Notion →</a></div></div>
</div>

If installing feels daunting, send this:

<div class="prompt"><span class="who">Ask for install help</span><button class="copy" type="button">Copy</button><span class="txt">Hi! I work as <span class="fill">(what you do)</span>, and I'm completely new to this. I want to install <span class="fill">(OneDrive / Obsidian / the Claude desktop app)</span> on my computer. If you can install it for me, please do. If not, walk me through it slowly, one step at a time. I'm on <span class="fill">(Windows / Mac)</span>.</span></div>

## <span class="no">4</span> Have your AI do the setup

Once the tools are ready, open the Claude or GPT desktop app and send the message below. **Your only job is to send it and check the result.** The AI creates the folders and files.

<div class="prompt"><span class="who">Knowledge management setup</span><button class="copy" type="button">Copy</button><span class="txt">Hi! I work as <span class="fill">(what you do)</span>, and I'm new to AI. From now on, I want to keep everything we work on together in one folder. Please set it up as described below. Do whatever you can yourself, and for anything I need to do, walk me through it slowly, one step at a time.

1. Create a folder called "me" inside OneDrive. Save everything we make together in it from now on.
2. I'm not a developer — I'll be opening this folder with my mouse to look through and organize things myself. Give folders and files names that are easy to recognize at a glance, and put a shortcut to the "me" folder on my desktop.
3. Show me how to set the "me" folder to "Always keep on this device" in OneDrive, so it opens even without internet.
4. Create a file called AI협업규칙.md in the "me" folder with these rules:
   - Read this file before starting any work
   - Save each new piece of work in its own topic folder inside "me"
   - When a task is done, add a short entry to that folder's 작업기록.md: the date, what was done, and what's next
   - Never write passwords or API keys in any file
   - I'm a beginner, so explain in plain words, one step at a time
5. Show me how to connect <span class="fill">(Obsidian / Notion)</span> so I can view these notes.

When you're done, give me a summary of what you created and where.</span></div>

### Why ask it this way?

Even if you copy and paste, know why each line is there. That way you can adjust it to fit your own situation later.

<div class="why">
<div><span class="say">A "me" folder inside OneDrive</span><span class="because">Switch laptops or use two, and you still see the same folder. If your computer dies, your work doesn't.</span></div>
<div><span class="say">Save everything here</span><span class="because">Left to itself, AI saves things anywhere. Naming the spot up front is the only way to keep things from scattering.</span></div>
<div><span class="say">I'll open it with my mouse and organize it myself</span><span class="because">Without this line, AI may build things the way a developer would — cryptic English abbreviations, deep paths. A folder you can't find your way around is a folder you can't use without AI.</span></div>
<div><span class="say">Always keep on this device</span><span class="because">To save space, OneDrive sometimes keeps files only in the cloud. When that happens, your AI or Obsidian may not be able to open them.</span></div>
<div><span class="say">Read this file first</span><span class="because">Remember the principle from section 1? AI doesn't remember your chats. Having it read this file every time means you never repeat yourself.</span></div>
<div><span class="say">Add an entry to 작업기록.md</span><span class="because">A month later, when something breaks, you can start with "read the work log and fix it." It's also your handover note when you pass the work to a different AI.</span></div>
<div><span class="say">Never write passwords or API keys</span><span class="because">The folder is in the cloud and might show up when you share your screen. A leaked key can't be taken back.</span></div>
<div><span class="say">One step at a time</span><span class="because">AI loves to dump ten steps on you at once. Taking them one by one is how you figure out exactly where you got stuck.</span></div>
</div>

<div class="callout tip"><svg><use href="#i-check"/></svg><div><b>Stuck? Send a screenshot.</b> Take one (<code>Win + Shift + S</code> on Windows, <code>Cmd + Shift + 4</code> on Mac), paste it into the chat, and ask: "This is my screen right now. What do I click next?"</div></div>

<div class="callout warn"><svg><use href="#i-warn"/></svg><div><b>Always do these yourself.</b> Logging in, typing passwords, payment buttons, and any "Do you want to allow…?" pop-up. Don't hand these to the AI — read what you're allowing, then click it yourself.</div></div>

## <span class="no">5</span> Check that it worked

<ul class="checks">
<li><svg><use href="#i-check"/></svg><span>Double-clicking the <b>"me" shortcut</b> on your desktop opens the folder</span></li>
<li><svg><use href="#i-check"/></svg><span>You can see what's in <b>AI협업규칙.md</b> in Obsidian (or Notion)</span></li>
<li><svg><use href="#i-check"/></svg><span>In your AI app, open a <b>new chat</b> and say "read AI협업규칙.md and summarize it" — it tells you the rules</span></li>
</ul>

If all three work, you're set. From now on, whatever you build with AI, just start each chat with this one line:

<div class="prompt"><span class="who">Every time from now on</span><button class="copy" type="button">Copy</button><span class="txt">Read AI협업규칙.md in the "me" folder before we start.</span></div>

## <span class="no">6</span> One step further: GitHub (for intermediate users)

If you've already built something with code using AI, I'd also recommend **GitHub**. It's a storage space made for code: every change is recorded — when and what — so you can undo mistakes, and it makes it easy for different AIs to pass the same code back and forth.

<div class="tools">
<div class="tool t-gh wide"><div class="h"><svg class="i"><use href="#i-github"/></svg>GitHub</div><p>You don't need to learn it. Just sign up, then tell your AI "upload this project to GitHub as a private repo." If you're just starting out, it's <b>not required</b> — OneDrive and Obsidian are plenty.</p><div class="go"><a href="https://github.com/signup" target="_blank" rel="noopener">Sign up for GitHub →</a></div></div>
</div>

That's all you need before Week 1. Don't worry if you can't finish it all — **wherever you get stuck becomes material for our first session.** Bring a screenshot of the screen where you got stuck 🙂
