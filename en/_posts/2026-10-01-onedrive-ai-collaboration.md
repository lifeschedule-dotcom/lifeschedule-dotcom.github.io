---
title: "How to Get AIs Working Together in Real Time"
section: vibe-coding
sub: automation
ref: onedrive-ai-collaboration
date: 2026-10-01 22:30:00 +0900
description: How GPT and Claude passed work back and forth through MD files in one synced folder.
spacious: true
---

When I have AIs cross-check each other,<br>
or split a big project into parts and then merge the results,<br>
I catch myself writing and explaining the same thing over and over. ^^;<br>
So I set things up so the two AIs pass work to each other through files in the same folder.

<div class="keyline">Leave an MD file in one synced folder,<br>and GPT and Claude hand work back and forth through it.</div>

## A Folder the AIs Share

Inside <code>me</code>, my AI work folder, I made a folder called <code>live_collaboration</code>.<br>
Both the GPT and Claude desktop apps have <code>me</code> open as their work folder.<br>
When one AI leaves an MD file in this folder, the other AI reads it and replies.

<div class="seq"><figure><a href="/assets/img/collaboration/laptop-b-live-collaboration.png" target="_blank" rel="noopener"><img src="/assets/img/collaboration/laptop-b-live-collaboration.png" alt="File Explorer showing the live_collaboration folder inside me, with collaboration MD files" style="max-width:none"></a><figcaption>The <b>me &gt; live_collaboration</b> folder</figcaption></figure></div>

## Real-Time Reviews

This time, I had GPT write down what it had done so far, and what it wanted Claude to check, in an MD (Markdown) file.<br>
Then I asked Claude to read that file and review it.

Claude didn't touch the original and left its review in a separate MD file.<br>
GPT read the review, applied it, and asked for another review.<br>
I no longer had to write the same explanation twice.

<code>live_collaboration</code> is just the folder name I picked.<br>
Here's the naming rule I set for the MD files that go in it.<br>
Each file name starts with the **project, number, and task**.<br>
Then comes **→ receiving AI - date·time writing AI.md**.

<div class="wc">
<p><b>Example: Blog collab 05 draft review → GPT - 2026-10-02 0005 Claude.md</b></p>
<p>The 5th file in the blog collaboration: Claude reviewed the draft and sent it to GPT.</p>
</div>

You can tell at a glance who should read which file next.

<div class="wc">
<p><b>Quick note!</b></p>
<p>If you subscribe to both Claude Pro or Max and ChatGPT, you can have GPT get Claude's review directly.<br>
GPT runs Claude Code, installed on your computer, and brings back Claude's review.<br>
To go the other way and have Claude call GPT, install OpenAI's Codex plugin in Claude Code.<br>
(As of October 4, 2026)</p>
</div>

<div class="prompt"><span class="who">Ask GPT to get Claude's review</span><button class="copy" type="button">Copy</button><span class="txt">I'd like Claude to review what we've made so far.
Please run Claude Code, installed on my computer, and ask it for a review.

- What to review: <span class="fill">(result file name)</span>
- Review criteria: <span class="fill">(wrong facts, missing steps, hard-to-read sentences)</span>

Save Claude's review as an MD file in live_collaboration, and give me a summary of what to apply.
If Claude Code isn't installed, walk me through installing it, one step at a time.
If a window asks whether to allow running something, I'll read it and decide myself.</span></div>

## What Real-Time Collaboration Looks Like

The two AIs don't share their chats automatically.<br>
By real-time collaboration, I mean that when a new file appears, the other AI reads it and replies.

<div class="collab">
<div class="cb-ai"><img src="/assets/img/icons/chatgpt.png" alt=""><b>GPT</b></div>
<div class="cb-arr"><span>① Leave a <br>request MD <i>→</i></span><span><i>←</i> ④ Read and <br>apply</span></div>
<div class="cb-folder"><b><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-8l-2-2z"/></svg>live_collaboration</b><div class="cb-file">01 Request → Claude.md</div><div class="cb-file">02 Review → GPT.md</div><span class="cb-note">Both AIs check for new files every 2 minutes</span></div>
<div class="cb-arr"><span>② Read the <br>new file <i>→</i></span><span><i>←</i> ③ Leave a <br>review MD</span></div>
<div class="cb-ai"><img src="/assets/img/icons/claude.png" alt=""><b>Claude</b></div>
</div>

### My Request Prompts (Give It a Try!)

<p class="sub-note">Just change the yellow parts to fit your situation.</p>

<div class="prompt"><span class="who">To the lead AI</span><button class="copy" type="button">Copy</button><span class="txt">Hi! You're the lead on this project, and <span class="fill">(GPT)</span> will be working with you.

- Project: <span class="fill">(project name)</span>
- Shared folder: live_collaboration inside me

1. Splitting the work
   - You run the project, but feel free to hand parts of it to <span class="fill">(GPT)</span>.
   - You decide when a review is needed. When everything is finished, always get a review.

2. Working through files
   - Leave anything you hand off or want reviewed as an MD file in live_collaboration.
   - Write the background, goal, and progress so far in the file, so I don't have to explain it separately.
   - File name: project, number, task → receiving AI - date·time writing AI.md
   - Don't edit the other AI's originals. Leave feedback in a new MD file.

3. Checking in and wrapping up
   - While we work, check the folder every 2 minutes for new files addressed to you.
   - When the work I gave you and all reviews are done, leave a "done" MD file and stop checking.

Before doing anything hard to undo, like publishing, sending, or deleting, ask me first.</span></div>

<div class="prompt"><span class="who">To the partner AI</span><button class="copy" type="button">Copy</button><span class="txt">Hi! <span class="fill">(Claude)</span> is the lead on this project, and you'll be working with it.

- Check the live_collaboration folder inside me every 2 minutes, and read and reply to MD files addressed to you.
- Reply in a new MD file using the same naming rule, and don't edit the other AI's originals.
- When a "done" MD file arrives, stop checking.</span></div>

This is how I make the request.

## A Folder That Links Two Laptops Too

My <code>me</code> folder lives in OneDrive, so the same files show up on my other laptop in real time.

These days I often tell the AI, "Do it yourself."<br>
Then the AI takes over the screen itself, from clicking in Chrome to typing code.<br>
This feature is called Computer Use.<br>
While it runs, touching the laptop gets in the AI's way, so I can't do anything on it.<br>
So it was handy to keep working on other things from my other laptop.

<div class="seq"><figure><a href="/assets/img/collaboration/onedrive-sync-status.png" target="_blank" rel="noopener"><img src="/assets/img/collaboration/onedrive-sync-status.png" alt="OneDrive on the other laptop showing backed up and synced, with new collaboration files downloaded" style="max-width:340px;margin:auto"></a><figcaption>Collaboration files arriving on the other laptop.</figcaption></figure></div>

One member of my study group works on a Mac mini,<br>
and every time they move files to their Windows desktop, they zip them onto a USB drive.

<div class="keyline">OneDrive or Google Drive,<br>the key is <b>"sync."</b></div>

Sync means that when you add or change a file on one computer, the same file automatically updates on the other.<br>
Put the collaboration folder inside a synced folder, and the AIs can keep passing work back and forth, whether you switch from Windows to Mac or use both devices at once.

OneDrive and Google Drive both sync on Mac and Windows.<br>
With Google Drive, make an AI work folder like my <code>me</code>, and put a <code>live_collaboration</code> folder inside it.

### Try It with Google Drive (Give It a Try!)

<p class="sub-note">Just change the yellow parts to fit your situation.</p>

<div class="prompt"><span class="who">Set up a synced folder (in the desktop app)</span><button class="copy" type="button">Copy</button><span class="txt">Hi! I want the AIs on my two computers to pass files to each other through a Google Drive folder.

- This computer: <span class="fill">(Mac mini / Windows desktop)</span>
- The post I'm following: https://lifeschedule-dotcom.github.io/en/2026/10/01/onedrive-ai-collaboration/

1. Install the Google Drive desktop app
   - Walk me through installing Google Drive for desktop and signing in.
   - Choose "Mirror files" as the sync option for My Drive. If there isn't enough space, tell me first.

2. Create the folders
   - Create an AI work folder <span class="fill">(me)</span> in My Drive, and a live_collaboration folder inside it.
   - If they already exist, just use them.

3. Choose the work folder
   - Show me how to pick <span class="fill">(me)</span> as the work folder in the Claude and GPT apps.

I'll type my login and password myself. Don't delete or move any existing files.
I'll make this same request again on my other computer, with the same Google account.
Go slowly, one step at a time, and when I send a screenshot, tell me what to click next.</span></div>

### Sources

<ul class="refs">
<li><a href="https://support.microsoft.com/en-us/onedrive/sync-your-computer-s-files-and-folders-with-onedrive" target="_blank" rel="noopener">Microsoft: Sync your computer's files and folders with OneDrive</a></li>
<li><a href="https://support.microsoft.com/en-us/office/sync-files-with-onedrive-on-macos-d11b9f29-00bb-4172-be39-997da46f913f" target="_blank" rel="noopener">Microsoft: Sync files with OneDrive on macOS</a></li>
<li><a href="https://support.google.com/drive/answer/13401938" target="_blank" rel="noopener">Google: Stream and mirror files with Drive for desktop</a></li>
<li><a href="https://learn.chatgpt.com/use-cases/use-your-computer-with-codex" target="_blank" rel="noopener">OpenAI: Computer Use</a></li>
<li><a href="https://support.claude.com/en/articles/11145838-use-claude-code-with-your-pro-or-max-plan" target="_blank" rel="noopener">Anthropic: Use Claude Code with your Pro or Max plan</a></li>
<li><a href="https://github.com/openai/codex-plugin-cc" target="_blank" rel="noopener">OpenAI: Codex plugin for Claude Code</a></li>
</ul>
