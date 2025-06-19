import React from "react";

const goExamples = [
  { title: "Hello World", href: "https://gobyexample.com/hello-world" },
  { title: "Values", href: "https://gobyexample.com/values" },
  { title: "Variables", href: "https://gobyexample.com/variables" },
  { title: "Constants", href: "https://gobyexample.com/constants" },
  { title: "For", href: "https://gobyexample.com/for" },
  { title: "If/Else", href: "https://gobyexample.com/if-else" },
  { title: "Switch", href: "https://gobyexample.com/switch" },
  { title: "Arrays", href: "https://gobyexample.com/arrays" },
  { title: "Slices", href: "https://gobyexample.com/slices" },
  { title: "Maps", href: "https://gobyexample.com/maps" },
  { title: "Functions", href: "https://gobyexample.com/functions" },
  {
    title: "Multiple Return Values",
    href: "https://gobyexample.com/multiple-return-values",
  },
  {
    title: "Variadic Functions",
    href: "https://gobyexample.com/variadic-functions",
  },
  { title: "Closures", href: "https://gobyexample.com/closures" },
  { title: "Recursion", href: "https://gobyexample.com/recursion" },
  {
    title: "Range over Built-in Types",
    href: "https://gobyexample.com/range-over-built-in-types",
  },
  { title: "Pointers", href: "https://gobyexample.com/pointers" },
  {
    title: "Strings and Runes",
    href: "https://gobyexample.com/strings-and-runes",
  },
  { title: "Structs", href: "https://gobyexample.com/structs" },
  { title: "Methods", href: "https://gobyexample.com/methods" },
  { title: "Interfaces", href: "https://gobyexample.com/interfaces" },
  { title: "Enums", href: "https://gobyexample.com/enums" },
  {
    title: "Struct Embedding",
    href: "https://gobyexample.com/struct-embedding",
  },
  { title: "Generics", href: "https://gobyexample.com/generics" },
  {
    title: "Range over Iterators",
    href: "https://gobyexample.com/range-over-iterators",
  },
  { title: "Errors", href: "https://gobyexample.com/errors" },
  { title: "Custom Errors", href: "https://gobyexample.com/custom-errors" },
  { title: "Goroutines", href: "https://gobyexample.com/goroutines" },
  { title: "Channels", href: "https://gobyexample.com/channels" },
  {
    title: "Channel Buffering",
    href: "https://gobyexample.com/channel-buffering",
  },
  {
    title: "Channel Synchronization",
    href: "https://gobyexample.com/channel-synchronization",
  },
  {
    title: "Channel Directions",
    href: "https://gobyexample.com/channel-directions",
  },
  { title: "Select", href: "https://gobyexample.com/select" },
  { title: "Timeouts", href: "https://gobyexample.com/timeouts" },
  {
    title: "Non-Blocking Channel Operations",
    href: "https://gobyexample.com/non-blocking-channel-operations",
  },
  {
    title: "Closing Channels",
    href: "https://gobyexample.com/closing-channels",
  },
  {
    title: "Range over Channels",
    href: "https://gobyexample.com/range-over-channels",
  },
  { title: "Timers", href: "https://gobyexample.com/timers" },
  { title: "Tickers", href: "https://gobyexample.com/tickers" },
  { title: "Worker Pools", href: "https://gobyexample.com/worker-pools" },
  { title: "WaitGroups", href: "https://gobyexample.com/waitgroups" },
  { title: "Rate Limiting", href: "https://gobyexample.com/rate-limiting" },
  { title: "Atomic Counters", href: "https://gobyexample.com/atomic-counters" },
  { title: "Mutexes", href: "https://gobyexample.com/mutexes" },
  {
    title: "Stateful Goroutines",
    href: "https://gobyexample.com/stateful-goroutines",
  },
  { title: "Sorting", href: "https://gobyexample.com/sorting" },
  {
    title: "Sorting by Functions",
    href: "https://gobyexample.com/sorting-by-functions",
  },
  { title: "Panic", href: "https://gobyexample.com/panic" },
  { title: "Defer", href: "https://gobyexample.com/defer" },
  { title: "Recover", href: "https://gobyexample.com/recover" },
  {
    title: "String Functions",
    href: "https://gobyexample.com/string-functions",
  },
  {
    title: "String Formatting",
    href: "https://gobyexample.com/string-formatting",
  },
  { title: "Text Templates", href: "https://gobyexample.com/text-templates" },
  {
    title: "Regular Expressions",
    href: "https://gobyexample.com/regular-expressions",
  },
  { title: "JSON", href: "https://gobyexample.com/json" },
  { title: "XML", href: "https://gobyexample.com/xml" },
  { title: "Time", href: "https://gobyexample.com/time" },
  { title: "Epoch", href: "https://gobyexample.com/epoch" },
  {
    title: "Time Formatting / Parsing",
    href: "https://gobyexample.com/time-formatting-parsing",
  },
  { title: "Random Numbers", href: "https://gobyexample.com/random-numbers" },
  { title: "Number Parsing", href: "https://gobyexample.com/number-parsing" },
  { title: "URL Parsing", href: "https://gobyexample.com/url-parsing" },
  { title: "SHA256 Hashes", href: "https://gobyexample.com/sha256-hashes" },
  { title: "Base64 Encoding", href: "https://gobyexample.com/base64-encoding" },
  { title: "Reading Files", href: "https://gobyexample.com/reading-files" },
  { title: "Writing Files", href: "https://gobyexample.com/writing-files" },
  { title: "Line Filters", href: "https://gobyexample.com/line-filters" },
  { title: "File Paths", href: "https://gobyexample.com/file-paths" },
  { title: "Directories", href: "https://gobyexample.com/directories" },
  {
    title: "Temporary Files and Directories",
    href: "https://gobyexample.com/temporary-files-and-directories",
  },
  { title: "Embed Directive", href: "https://gobyexample.com/embed-directive" },
  {
    title: "Testing and Benchmarking",
    href: "https://gobyexample.com/testing-and-benchmarking",
  },
  {
    title: "Command-Line Arguments",
    href: "https://gobyexample.com/command-line-arguments",
  },
  {
    title: "Command-Line Flags",
    href: "https://gobyexample.com/command-line-flags",
  },
  {
    title: "Command-Line Subcommands",
    href: "https://gobyexample.com/command-line-subcommands",
  },
  {
    title: "Environment Variables",
    href: "https://gobyexample.com/environment-variables",
  },
  { title: "Logging", href: "https://gobyexample.com/logging" },
  { title: "HTTP Client", href: "https://gobyexample.com/http-client" },
  { title: "HTTP Server", href: "https://gobyexample.com/http-server" },
  { title: "Context", href: "https://gobyexample.com/context" },
  {
    title: "Spawning Processes",
    href: "https://gobyexample.com/spawning-processes",
  },
  {
    title: "Exec'ing Processes",
    href: "https://gobyexample.com/execing-processes",
  },
  { title: "Signals", href: "https://gobyexample.com/signals" },
  { title: "Exit", href: "https://gobyexample.com/exit" },
];

function Golang() {
  return (
    <div className="golang-page minimal left-align">
      <h2>Go by Example</h2>
      <ul className="go-example-list">
        {goExamples.map((ex) => (
          <li key={ex.href}>
            <a href={ex.href} target="_blank" rel="noopener noreferrer">
              {ex.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Golang;
