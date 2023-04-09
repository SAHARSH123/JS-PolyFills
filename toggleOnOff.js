function toggle(...args) {
  let totalArgs = args.length;
  let currentArgIndex = 0;

  return function () {
    console.log(args[currentArgIndex % totalArgs]);
    currentArgIndex++;
  };
}

const hello = toggle("hello");
hello(); //hello
hello(); //hello

const onOff = toggle("on", "off", "bye");
onOff(); //on
onOff(); //off
onOff(); //bye
onOff(); //on
