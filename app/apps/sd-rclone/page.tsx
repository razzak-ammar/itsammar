import Link from "next/link";
import { AppDocument, SupportLink } from "./_components";

export default function SdRclonePage() {
  return (
    <AppDocument
      label="Personal backup utility"
      title="SD Rclone"
      description="A private household backup setup for our living room Mac, using rclone and Google Drive."
    >
      <section>
        <h2>What it does</h2>
        <p>
          SD Rclone is a personal configuration of the open-source <a href="https://rclone.org/">rclone</a> command-line
          tool, operated by Ammar Razzak. It copies selected files from the Mac
          to an authorized Google Drive account and can restore backed-up files
          when needed. It is for the owner and authorized household members;
          there is no public registration or hosted backup service.
        </p>
      </section>
      <section>
        <h2>Why Google access is needed</h2>
        <p>
          Google authorization lets rclone read file and folder information,
          upload backups, and download files for restoration. Depending on the
          permissions granted and commands configured, it can also update or
          delete files in Drive. Access is used only for household backup and
          file management.
        </p>
        <p>
          Backups run on the Mac and transfer directly to Google Drive. This
          website provides app information and policies; it does not receive
          backup files or Google authorization tokens.
        </p>
      </section>
      <section>
        <h2>Privacy &amp; terms</h2>
        <p>
          Read the <Link href="/apps/sd-rclone/privacy">Privacy Policy</Link> for
          data access, storage, and removal details, and the <Link href="/apps/sd-rclone/terms">Terms of Service</Link> for
          conditions of use.
        </p>
      </section>
      <section>
        <h2>Contact</h2>
        <p>For support or privacy questions, contact Ammar Razzak at <SupportLink />.</p>
        <p className="text-sm text-gray-400">
          SD Rclone is an independent personal setup. It is not an official
          Google product or the official rclone service.
        </p>
      </section>
    </AppDocument>
  );
}
