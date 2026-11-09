---
title: "First Isaac Sim Exercise: Open a Drawer from a Laptop Without an NVIDIA GPU"
section: physical-ai
sub: nvidia
ref: isaac-sim-drawer
date: 2026-10-25 22:00:00 +0900
description: "Run an Isaac Lab drawer-opening example on a cloud GPU and change how long the robot pulls."
spacious: true
---

<style>
.order { width: 100%; border-collapse: collapse; table-layout: fixed; margin: 14px 0; font-size: 17px; line-height: 1.5; }
.order th, .order td { border-bottom: 1px solid #e6dde0; padding: 10px 8px; text-align: left; vertical-align: top; }
.order thead { background: #fbf1f4; }
.order th:first-child { width: 50%; }
.order th:last-child { width: 20%; }
.order td:last-child { white-space: nowrap; }
.order .state { display: block; font-size: 17px; font-weight: 600; color: #8a5a6a; word-break: normal; overflow-wrap: normal; }
.order .hot { background: #fbf1f4; }
@media (max-width: 560px) {
  .order th, .order td { padding: 8px 4px; }
  .order th:last-child { width: 22%; }
}
</style>

My laptop doesn’t have an NVIDIA graphics card.<br>
I rented a **cloud GPU** to run Isaac Sim and tried an example where a robot arm opens a drawer.

<div class="keyline">Run the example in two browser tabs, then change how long the robot pulls the drawer.</div>

## <span class="no">1</span> Two browser tabs

<div class="twoai">
<div class="ta chat"><div class="ta-h">① VS Code tab</div><p>Enter <b>commands</b> here.</p></div>
<div class="ta desk"><div class="ta-h">② Viewer tab</div><p>Watch <b>Isaac Sim</b> here.</p></div>
</div>

The cloud computer runs both. Chrome displays the editor and the stream.

<figure><img src="/assets/img/robotics/isaac-drawer-open.png" alt="A Franka robot arm holding a partially open drawer in Isaac Sim" width="1062" height="556"></figure>

## <span class="no">2</span> Start the cloud computer

<h3 class="step-h"><span>1</span>Sign up for Brev and add credits</h3>

Sign up for [NVIDIA Brev](https://brev.nvidia.com). Under **Billing**, add your payment method and buy credits.

<div class="callout warn"><svg><use href="#i-warn"/></svg><div><b>Enter sign-up, login, and payment details yourself.</b></div></div>

<h3 class="step-h"><span>2</span>Deploy the Isaac Launchable</h3>

Select **Deploy Now** in the [Isaac Launchable repository](https://github.com/isaac-sim/isaac-launchable), then select **Deploy Launchable** in Brev.<br>
This starts a cloud computer with Isaac Sim and Isaac Lab installed.

<div class="wc"><p>The AWS L40S I used cost <b>US$3.65 per hour</b> on October 25, 2026.<br>
Allow a few minutes for the first launch.</p></div>

<h3 class="step-h"><span>3</span>Open VS Code</h3>

Wait for the status to show **Running** and **Built**. Under **HTTP Ports**, select the **↗** next to the address.<br>
Sign in to Brev to open VS Code in Chrome.

<div class="callout warn"><svg><use href="#i-warn"/></svg><div>When you’re done, select <b>Stop</b> at the top right of the Brev page.<br>
Storage charges can continue after you stop the instance.<br>
The red <b>Delete</b> button also deletes files you changed on the instance.</div></div>

## <span class="no">3</span> Run the drawer example

In VS Code, select **☰ → Terminal → New Terminal** and enter these commands one at a time.

<div class="prompt"><span class="who">① Go to the Isaac Lab folder</span><button class="copy" type="button">Copy</button><span class="txt">cd /workspace/isaaclab</span></div>

<div class="prompt"><span class="who">② Run the drawer example</span><button class="copy" type="button">Copy</button><span class="txt">./isaaclab.sh -p scripts/environments/state_machine/open_cabinet_sm.py --num_envs 4 --livestream 2 --viz kit</span></div>

<div class="wc">
<p><b>-p</b> runs the Python script that follows it through Isaac Lab.</p>
<p><b>--num_envs 4</b> starts four robot environments at once.</p>
<p><b>--livestream 2 --viz kit</b> streams the Isaac Sim view to the browser.</p>
</div>

Paste the VS Code address into a new tab and <b>replace <code>?folder=/workspace</code> with <code>viewer/</code></b> before opening it.<br>
The viewer says “Waiting for stream” while Isaac Sim starts.<br>
When it’s ready, you’ll see four robots.

## <span class="no">4</span> Common errors

<h3 class="step-h"><span>1</span>“Command not found” or “No such file”</h3>

The terminal couldn’t find a command or file.<br>
Check the spelling and path first. For example, `mdkir` and `oepn` should be `mkdir` and `open`.

<div class="wc">
<p><b>↑ key</b> brings back the last command so you can fix the typo.</p>
<p><b>Tab key</b> completes a folder or file name after you type its first few characters.</p>
</div>

<h3 class="step-h"><span>2</span>FileNotFoundError for a robot asset</h3>

On October 25, 2026, the example couldn’t find the **Franka arm asset under the Isaac 6.0 path** on NVIDIA’s server.<br>
The 5.1 path worked for this run.

1. In the VS Code file explorer, open `isaaclab/apps/isaaclab.python.kit`.
2. Press **Ctrl + H**. Find `Assets/Isaac/6.0`, replace it with `Assets/Isaac/5.1`, and select **Replace All**.
3. Save with **Ctrl + S**. In the terminal, use **↑ → Enter** to rerun the example.

## <span class="no">5</span> Move the camera

Click inside the viewer, then use the mouse.

<div class="wc">
<p><b>Alt + left-drag</b> orbits the camera.</p>
<p><b>Middle-button drag</b> pans the camera.</p>
<p><b>Scroll the wheel</b> to zoom.</p>
</div>

## <span class="no">6</span> Read the drawer-opening sequence

The example defines the sequence in code.<br>
In VS Code, press **Ctrl + P**, type `open_cabinet`, and open `open_cabinet_sm.py`.

<h3 class="step-h"><span>1</span>Six states and their wait times</h3>

`OpenDrawerSmState` lists the states, and `OpenDrawerSmWaitTime` lists the wait times.<br>
Use **Ctrl + F** to jump to each name.

<table class="order">
<thead><tr><th scope="col">State</th><th scope="col">What you see</th><th scope="col">Time</th></tr></thead>
<tbody>
<tr><td>① Rest<span class="state">REST</span></td><td>The arm stays still.</td><td>0.5 s</td></tr>
<tr><td>② Move in front<span class="state">APPROACH_<wbr>INFRONT_<wbr>HANDLE</span></td><td>The arm reaches toward the drawer.</td><td>1.25 s</td></tr>
<tr><td>③ Approach handle<span class="state">APPROACH_<wbr>HANDLE</span></td><td>The arm moves up to the handle.</td><td>1.0 s</td></tr>
<tr><td>④ Grip handle<span class="state">GRASP_<wbr>HANDLE</span></td><td>The gripper closes.</td><td>1.0 s</td></tr>
<tr class="hot"><td>⑤ Pull drawer<span class="state">OPEN_<wbr>DRAWER</span></td><td>The arm pulls while gripping.</td><td>3.0 s</td></tr>
<tr><td>⑥ Final state<span class="state">RELEASE_<wbr>HANDLE</span></td><td>The arm stops with its gripper closed.</td><td>0.2 s*</td></tr>
</tbody>
</table>

A **state machine** tracks the current step and defines when to move to the next one.<br>
Steps ② and ③ check both the elapsed time and whether the arm has reached the target.<br>
*Step ⑥ stays in the same state with the gripper closed even after 0.2 seconds. See the [official example code](https://github.com/isaac-sim/IsaacLab/blob/v3.0.0-beta2/scripts/environments/state_machine/open_cabinet_sm.py).

<h3 class="step-h"><span>2</span>Change one number</h3>

Change the wait time for ⑤ `OPEN_DRAWER` from `3.0` to `0.5` and save with **Ctrl + S**.<br>
In the terminal, press **Ctrl + C** to stop the current run, then **↑ → Enter** to start it again.

In my recording, the drawer opened less when the arm had less time to pull.

<div class="done"><div class="done-t">🎉 You ran the drawer example and changed how the robot moves!</div></div>
