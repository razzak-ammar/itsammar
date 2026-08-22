export default function AvailabilityLoading() {
  return (
    <main className="grid min-h-screen place-items-center overflow-hidden bg-gray-950 px-6 text-center text-white">
      <div className="space-y-5">
        <div className="space-cat mx-auto text-5xl" aria-hidden="true">🐈‍⬛</div>
        <div className="flex justify-center gap-2" aria-label="Loading availability">
          <i className="loading-dot" /><i className="loading-dot" /><i className="loading-dot" />
        </div>
        <p className="text-sm text-gray-400">Asking the space cat about the schedule…</p>
      </div>
    </main>
  );
}
