CREATE TABLE `schools` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`country` text NOT NULL,
	`city` text,
	`logo_url` text,
	`description` text,
	`registration_code` text NOT NULL,
	`status` text DEFAULT 'pending' NOT NULL,
	`payout_email` text,
	`created_at` integer DEFAULT (unixepoch() * 1000) NOT NULL,
	`updated_at` integer DEFAULT (unixepoch() * 1000) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `school_admins` (
	`id` text PRIMARY KEY NOT NULL,
	`school_id` text NOT NULL,
	`user_id` text NOT NULL,
	`role` text DEFAULT 'owner' NOT NULL,
	`created_at` integer DEFAULT (unixepoch() * 1000) NOT NULL,
	FOREIGN KEY (`school_id`) REFERENCES `schools`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `school_students` (
	`id` text PRIMARY KEY NOT NULL,
	`school_id` text NOT NULL,
	`user_id` text NOT NULL,
	`registration_number` text,
	`status` text DEFAULT 'pending' NOT NULL,
	`applied_at` integer DEFAULT (unixepoch() * 1000) NOT NULL,
	`school_approved_at` integer,
	`activated_at` integer,
	`deactivated_at` integer,
	FOREIGN KEY (`school_id`) REFERENCES `schools`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `parental_consents` (
	`id` text PRIMARY KEY NOT NULL,
	`school_student_id` text NOT NULL,
	`parent_email` text NOT NULL,
	`token_hash` text NOT NULL,
	`status` text DEFAULT 'pending' NOT NULL,
	`confirmed_at` integer,
	`expires_at` integer NOT NULL,
	`created_at` integer DEFAULT (unixepoch() * 1000) NOT NULL,
	FOREIGN KEY (`school_student_id`) REFERENCES `school_students`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `affiliate_commissions` (
	`id` text PRIMARY KEY NOT NULL,
	`school_id` text NOT NULL,
	`school_student_id` text,
	`order_id` text,
	`source` text NOT NULL,
	`amount_usd` real NOT NULL,
	`payout_status` text DEFAULT 'pending' NOT NULL,
	`paid_at` integer,
	`created_at` integer DEFAULT (unixepoch() * 1000) NOT NULL,
	FOREIGN KEY (`school_id`) REFERENCES `schools`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`school_student_id`) REFERENCES `school_students`(`id`) ON UPDATE no action ON DELETE set null,
	FOREIGN KEY (`order_id`) REFERENCES `orders`(`id`) ON UPDATE no action ON DELETE set null
);
--> statement-breakpoint
CREATE UNIQUE INDEX `schools_registration_code_idx` ON `schools` (`registration_code`);--> statement-breakpoint
CREATE INDEX `schools_status_idx` ON `schools` (`status`);--> statement-breakpoint
CREATE UNIQUE INDEX `school_admins_school_user_unique` ON `school_admins` (`school_id`,`user_id`);--> statement-breakpoint
CREATE INDEX `school_admins_user_idx` ON `school_admins` (`user_id`);--> statement-breakpoint
CREATE UNIQUE INDEX `school_students_school_user_unique` ON `school_students` (`school_id`,`user_id`);--> statement-breakpoint
CREATE INDEX `school_students_school_idx` ON `school_students` (`school_id`);--> statement-breakpoint
CREATE INDEX `school_students_user_idx` ON `school_students` (`user_id`);--> statement-breakpoint
CREATE UNIQUE INDEX `school_students_reg_number_idx` ON `school_students` (`registration_number`);--> statement-breakpoint
CREATE INDEX `parental_consents_school_student_idx` ON `parental_consents` (`school_student_id`);--> statement-breakpoint
CREATE UNIQUE INDEX `parental_consents_token_idx` ON `parental_consents` (`token_hash`);--> statement-breakpoint
CREATE INDEX `affiliate_commissions_school_idx` ON `affiliate_commissions` (`school_id`);--> statement-breakpoint
CREATE INDEX `affiliate_commissions_payout_status_idx` ON `affiliate_commissions` (`payout_status`);
