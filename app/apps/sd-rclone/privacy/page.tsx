import type { Metadata } from "next";
import { AppDocument, SupportLink } from "../_components";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How SD Rclone accesses, uses, stores, and removes Google Drive backup data.",
};

export default function PrivacyPage() {
  return (
    <AppDocument label="Updated October 17, 2026" title="Privacy Policy" description="How SD Rclone handles data for our personal household backups.">
      <section>
        <h2>Who operates this app</h2>
        <p>
          SD Rclone is Ammar Razzak&apos;s personal household backup configuration
          of rclone for a Mac and an authorized Google Drive account. This
          policy applies to that setup, rather than to every use of the
          independent rclone project. Contact: <SupportLink />.
        </p>
      </section>
      <section>
        <h2>Data accessed and purpose</h2>
        <p>
          With the account holder&apos;s authorization, rclone accesses Google
          Drive file contents and metadata such as file names, folder paths,
          sizes, modification times, and file identifiers. It uses this data to
          compare files, create and manage backups, and restore files. Depending
          on the granted permissions, access may extend beyond the backup folder.
          Commands may read, create, update, or delete files; the configured
          backup commands determine which operations run.
        </p>
        <p>
          OAuth access and refresh tokens allow rclone to connect to Drive and
          run scheduled backups without asking the account holder to sign in
          each time. Google handles sign-in; SD Rclone does not receive the
          Google account password.
        </p>
      </section>
      <section>
        <h2>Storage and protection</h2>
        <p>
          Backup files are stored in the authorized Google Drive account.
          Restored files, rclone configuration and tokens, and any generated
          logs or caches are stored on the Mac or other owner-controlled
          devices used to run the setup. Logs may contain file names, paths,
          transfer details, and errors. The operator limits device and
          configuration access to authorized users. Transfers to Google&apos;s
          API use HTTPS.
        </p>
        <p>
          This informational website does not receive Google tokens or backup
          contents. Its hosting provider may process ordinary request logs,
          including IP address, requested URL, and browser information, to
          serve and secure these pages.
        </p>
      </section>
      <section>
        <h2>Sharing and limited use</h2>
        <p>
          Files are transferred between owner-controlled devices and Google
          Drive for the requested backup tasks. Access is limited to the
          account holder and authorized household users, subject to the
          account&apos;s existing Drive sharing settings. Google processes stored
          files under its own <a href="https://policies.google.com/privacy">privacy policy</a>.
        </p>
        <p>
          Google user data is not sold, used for advertising, provided to data
          brokers, or used to train AI models. SD Rclone uses Google API data
          only for the backup and file management purposes described here, in
          accordance with the <a href="https://developers.google.com/terms/api-services-user-data-policy">Google API Services User Data Policy</a>,
          including its Limited Use requirements.
        </p>
      </section>
      <section>
        <h2>Retention, revocation, and deletion</h2>
        <p>
          Backups remain in Drive until removed by the account holder or the
          configured backup commands. Local configuration, logs, caches, and
          restored copies remain until the operator removes them. There is no
          separate hosted SD Rclone database of Google user data.
        </p>
        <p>
          You can stop future access by removing the app in your <a href="https://myaccount.google.com/connections">Google Account connections</a> and
          disabling scheduled backup jobs. Revoking access does not delete
          existing backups. To remove stored data, delete the relevant files
          from Drive and its trash, remove local copies and logs, and remove
          the saved rclone remote configuration and tokens on each configured
          device. Google&apos;s retention policies may also apply. Contact <SupportLink /> for
          help with data controlled by the operator.
        </p>
      </section>
      <section>
        <h2>Changes to this policy</h2>
        <p>
          Updates will appear on this page with a revised date. If the setup
          needs new uses of Google data or additional permissions, affected
          users will be informed and asked to authorize those changes before
          the new use begins.
        </p>
      </section>
    </AppDocument>
  );
}
