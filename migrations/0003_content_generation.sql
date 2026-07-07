CREATE TABLE `content_generation_jobs` (
	`id` text PRIMARY KEY NOT NULL,
	`created_by_user_id` text,
	`type` text NOT NULL,
	`status` text DEFAULT 'queued' NOT NULL,
	`input_json` text NOT NULL,
	`provider_job_id` text,
	`output_asset_key` text,
	`output_text_json` text,
	`error_message` text,
	`created_at` integer DEFAULT (unixepoch() * 1000) NOT NULL,
	`updated_at` integer DEFAULT (unixepoch() * 1000) NOT NULL,
	FOREIGN KEY (`created_by_user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE set null
);
--> statement-breakpoint
CREATE INDEX `content_jobs_status_idx` ON `content_generation_jobs` (`status`);--> statement-breakpoint
CREATE INDEX `content_jobs_type_idx` ON `content_generation_jobs` (`type`);
