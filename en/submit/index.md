---
layout: page
title: Submit Files
section: submit
lang: en
description: Where GPTers Cohort 24 members send their project files privately to the study lead.
spacious: true
---
Case posts are great for sharing what we learn, but it's hard to write about your own business in detail.<br>
So I've opened a channel where you can send the project files you need help customizing — to me only.

Send them in, and over our four weeks I'll research approaches that fit your situation ahead of time.<br>
When it helps, I'll also give you individual feedback.

<div class="keyline">Here's how to send them.</div>

## <span class="no">1</span> How to send

1. Open Claude Code or Codex, then copy the whole prompt below and paste it in.<br>Pasting it into the chat where you've been building works best.
2. The AI asks for your project name and where you're stuck.<br>If nothing is blocking you, just answer "none".
3. The AI shows the folders it found. Pick your project by number.
4. A file named `dev-files_date.zip` appears on your desktop.
5. Under **Submit** below, enter your nickname and upload the zip file.

## <span class="no">2</span> File-packing prompt <small>(give it a try!)</small>

<div class="prompt"><span class="who">Packing request (to Claude Code or Codex)</span><button class="copy" type="button">Copy</button><span class="txt">You help me turn my project files into a zip file to send to my study lead.
My study lead will hand these files to an AI to research approaches that fit my situation.
So the zip must include everything another AI needs to understand my project right away and keep working on it.

[Step 1: Ask me first]
Ask these two questions together in one message.
1) "What's the name of the project you're submitting? Tell me in one line what it does. (e.g. Booking automation - when a booking comes in, add it to a sheet and send a confirmation text)"
2) "Is there anything that was hard to solve on your own, or that you're stuck on now? If not, answer 'none'."

[Step 2: Find the folder and confirm it with me]
- Use my answers to find the project folder. Check the folder that's open now first; otherwise search Desktop, Documents, Downloads, my user folder and OneDrive for a folder whose name or contents match.
- Don't judge by folder name alone. Open the files inside and check they match the project I described.
- Show up to 3 candidates. For each one, show these four things:
  · folder path
  · 3-5 main files
  · last modified date
  · a one-line description based on the files
- Ask "Is this your project?" and let me pick by number. If the project is split across several folders, let me pick more than one.
- If you can't find a matching folder, tell me where you looked and ask me where it is.
- Never zip anything before I confirm the folder.
- Once I've confirmed the folder, don't ask me anything else. Decide on your own by looking at the files.

[Step 3: Gather the files]
- Include the whole folder I confirmed.
- If I use n8n and you're connected to it, export my workflows as JSON and include them. If you're not connected, skip this.
- Never edit or delete the original files. Work only on copies.

[Step 4: Leave these out]
- Secret files: .env, certificates, key files, files containing credentials or tokens → leave them out and only note the names of the files you left out
- API keys, passwords or tokens written in code or settings → include a copy with them replaced by "***"
- Data files with customer personal info (names, phone numbers, addresses, bank accounts) → leave them out and include a sample file with only the first line (column names)
- Folders that come back on reinstall: node_modules, .venv, venv, __pycache__, .git, dist, build
- Large files: photos, videos and anything over 10MB → leave them out and only list them

[Step 5: Write an AI handoff document]
Create "00_AI-handoff.md" at the top of the zip. Keep it short so another AI can pick up the work from this file alone, and write only facts confirmed from the files and this conversation. Don't make things up; write "needs checking" for anything you don't know.
- Project name and purpose (my description + what you learned from the files)
- Type (work automation / app / website / chatbot / other)
- Tools, languages and services used, and my computer (Windows/Mac)
- Folder structure and what the main files do (with the original folder location)
- How to run it
- Current status (done / in progress)
- Errors found in files, logs or this conversation (verbatim)
- Where I'm stuck: exactly what I answered
- List of files left out and information masked

[Step 6: Zip it]
- File name: dev-files_today's-date.zip (e.g. dev-files_20261002.zip)
- Save it on my desktop. If you can't find the desktop, save it right outside the project folder.
- If it's over 100MB, keep leaving out the largest files until it's under 100MB.

[Step 7: When you're done]
- Before zipping, check once more for any remaining secrets and tell me the result in one line.
- Tell me where the zip file was saved.</span></div>

## <span class="no">3</span> Submit

<!-- After publishing the form, replace the div below with: <a class="submit-go" href="(form link)" target="_blank" rel="noopener">Submit</a> -->
<div class="submit-go pending">Form goes here<small>Becomes the Submit button once the form is published</small></div>

Uploading a zip file requires signing in to Google.<br>
If you only worked in a web chat (ChatGPT or Claude), you can paste the chat's "Share" link instead of a zip.

## <span class="no">4</span> How your files are used

<ul class="use-list">
<li>Only I can see the files you send.<br>They are not shared with other members.</li>
<li>They are used only to research approaches for your work.<br>Never for anything else.</li>
<li>I delete them when the study ends.<br>You can ask me to delete them sooner at any time.</li>
</ul>

<div class="callout warn"><svg><use href="#i-warn"/></svg><div>The AI is set up to leave out API keys and passwords automatically.<br>Still, please check once before you send.</div></div>
