function updateNames() {
    const name1Node = document.getElementById('name1');
    name1Node.innerHTML = "Kovalenko";

    const name2Node = document.getElementById('name2');
    name2Node.innerHTML = "Mariia";

    const name3Node = document.getElementById('name3');
    name3Node.innerHTML = "Alekseevna"; // Corrected line
}

const node_for_click = document.getElementById("for_click");
node_for_click.addEventListener("click", updateNames);
