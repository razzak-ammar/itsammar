import type { Metadata } from "next";
import Link from "next/link";
import { AppDocument, SupportLink } from "../_components";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Conditions for using SD Rclone, a private household backup utility.",
};

export default function TermsPage() {
  return (
    <AppDocument label="Effective October 17, 2026" title="Terms of Service" description="Conditions for using this personal household backup setup.">
      <section>
        <h2>Personal use</h2>
        <p>
          SD Rclone is operated by Ammar Razzak for private household backups
          using rclone and Google Drive. Use is limited to the owner and
          authorized household members. By using this setup, you agree to these
          terms and the <Link href="/apps/sd-rclone/privacy">Privacy Policy</Link>.
        </p>
      </section>
      <section>
        <h2>Your files and account</h2>
        <p>
          Only connect accounts and back up files you own or have permission to
          access. You retain ownership of your files. You are responsible for
          choosing backup sources, destinations, permissions, and commands;
          securing access to your devices and accounts; and complying with
          applicable laws and Google&apos;s terms and storage limits.
        </p>
      </section>
      <section>
        <h2>Backup reliability</h2>
        <p>
          The setup is provided as is and as available, without a promise of
          uninterrupted operation, successful backups, or recovery of every
          file. Synchronization and deletion commands can change or remove
          destination files. Check backup results, test restores, and keep
          independent copies of important data.
        </p>
        <p>
          To the extent permitted by applicable law, the operator is not liable
          for lost data or service interruptions arising from use of this
          personal setup. These terms do not exclude rights or responsibilities
          that cannot legally be excluded.
        </p>
      </section>
      <section>
        <h2>Third-party services</h2>
        <p>
          Google Drive is provided by Google under its own <a href="https://policies.google.com/terms">terms</a> and
          policies. The rclone software is maintained by its independent
          open-source project under its <a href="https://rclone.org/licence/">license</a>.
          SD Rclone is not affiliated with or endorsed by Google or the rclone
          project. Their availability and features may change.
        </p>
      </section>
      <section>
        <h2>Stopping use and changes</h2>
        <p>
          You may stop using SD Rclone at any time by disabling the backup jobs
          and revoking Google access. Existing backups remain until separately
          deleted, as explained in the Privacy Policy. The operator may change
          or discontinue the setup; updates to these terms will appear on this
          page with a revised effective date.
        </p>
      </section>
      <section>
        <h2>Contact</h2>
        <p>For questions about these terms, contact Ammar Razzak at <SupportLink />.</p>
      </section>
    </AppDocument>
  );
}
