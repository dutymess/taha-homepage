<div style="max-width: 80% ; margin: 40px auto ;">
	<form id="form" onsubmit="run()" action="{{ route('log') }}">
		{{ csrf_field() }}
		<label for="command">This is Taha. What else do you want to know?</label>
		<input id="txtValid" name="was_valid" type="hidden">

		<input
				id="command"
				name="command"
				class="form-control"
				placeholder="Try something..."
				onclick="this.value = ''"
				style="padding: 20px"
		>
	</form>
</div>
