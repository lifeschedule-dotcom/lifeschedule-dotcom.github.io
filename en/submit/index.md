---
layout: page
title: Submit Files
section: submit
lang: en
description: Where GPTers Cohort 24 members send their project files privately to the study lead.
spacious: true
---
<div class="keyline">Attach your project files here.<small>You can make the zip file with the prompt below.</small></div>

## <span class="no">1</span> Attach

<form id="submit-form" class="sform" data-endpoint="https://script.google.com/macros/s/AKfycbzdtn8CjrIkqHaXIaaGFig6XBJhxgnhV6H5yoNXuHTdgaqsxj57VYBDpFjuclaQxNbmBg/exec" novalidate>
<label class="sf-row"><span class="sf-l">Nickname <b>*</b></span><input name="nickname" type="text" maxlength="40" autocomplete="nickname" required></label>
<label class="sf-row"><span class="sf-l">Project file (zip, up to 100MB)</span><input name="file" type="file"></label>
<label class="sf-row"><span class="sf-l">Or a chat share link</span><input name="link" type="url" placeholder="https://" inputmode="url"></label>
<p class="sf-hint">If you only worked in a web chat (ChatGPT or Claude), paste the chat's "Share" link.</p>
<input class="sf-hp" name="website" type="text" tabindex="-1" autocomplete="off" aria-hidden="true">
<label class="sf-agree"><input name="agree" type="checkbox"> I've read the notes below and agree to send my files.</label>
<button class="sf-btn" type="submit">Submit</button>
<div class="sf-bar" hidden><span></span></div>
<p class="sf-status" role="status" aria-live="polite"></p>
</form>

<ul class="use-list">
<li>Only the study lead (Lifeschedule) can see your files.<br>They are not shared with other members.</li>
<li>They are used only to help you.<br>Never for anything else.</li>
<li>I use AI tools (such as Claude) when researching better approaches.</li>
<li>I delete them when the study ends.<br>You can ask me to delete them sooner at any time.</li>
</ul>

<div class="callout warn"><svg><use href="#i-warn"/></svg><div>The AI is set up to leave out API keys and passwords automatically.<br>Still, please check once before you send.</div></div>

## <span class="no">2</span> Zip-making prompt <small>(copy and paste it!)</small>

Paste the whole thing into Claude Code or Codex.<br>
Pasting it into the chat where you've been building works best.

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
- If some of my work lives outside the folder, include it if you can export it; if not, just note where it is in "00_AI-handoff.md".
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

<script src="{{ '/assets/js/submit.js' | relative_url }}"></script>
