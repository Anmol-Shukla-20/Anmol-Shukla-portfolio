const output = document.getElementById("output");
const input = document.getElementById("command");

function print(text) {
  output.innerHTML += "\n" + text;
  output.scrollTop = output.scrollHeight;
}

function runCommand(cmd) {
  print(`\nanmol@portfolio:~$ ${cmd}`);

  switch (cmd) {
    case "help":
      print("Commands: about, skills, projects, resume, contact");
      break;

    case "about":
      print("B.Tech EEE | CS Specialization\nAI, ML, IoT Enthusiast");
      break;

    case "skills":
      print("C, Python, DSA, IoT, ML Basics");
      break;

    case "projects":
      print("- Smart Helmet with Retina Lock\n- WiFi Motion Detection");
      break;

    case "resume":
      print("Opening resume...");
      window.open("assets/resume.pdf");
      break;

    case "contact":
      print("Email: anmol@email.com\nGitHub: github.com/anmol");
      break;

    default:
      print("Command not found. Type 'help'");
  }
}

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    runCommand(input.value.trim());
    input.value = "";
  }
});
