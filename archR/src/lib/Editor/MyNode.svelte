<script lang="ts">
  import { Node } from 'svelvet';

  const id = 10;
  let tobgColor = "red";
  function handleClick(e: CustomEvent) {
  const { detail } = e;
  console.log(detail.node)
  console.log("hey")
  detail.node.bgColor.set(tobgColor);
}

</script>

<Node id={id} on:nodeClicked="{handleClick}">
  <div class="my-component">
    <table>
      <tr>
        <td>id</td>
        <td>{id}</td>
      </tr>
      <tr>
        <td>bgColor</td>
        <td>{tobgColor}</td>
      </tr>
      
    <button on:click={() => tobgColor = "blue"}>switchcolor on nodeclick to blue</button>
  </div>
</Node>


<style>

  .my-component table {
    width: 100%;
  }
  .my-component table td {
    padding: 5px;
  }

  .my-component table tr:nth-child(odd) {
    background-color: #ddd;
  }

  .my-component table tr:nth-child(even) {
    background-color: #fff;
  }

  .my-component table tr:hover {
    background-color: #ccc;
  }

  .my-component table td:first-child {
    font-weight: bold;
  }



</style>