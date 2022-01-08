<script lang="ts">
	function hello(name: string): string {
		return `Hello ${name} !`;
	}

	const greet = hello('World');
</script>

<h1>{greet}</h1>

<style lang="scss" global>
	h1 {
		color: $primary;
	}

	body {
		background: #f5f5f5;
	}
</style>
